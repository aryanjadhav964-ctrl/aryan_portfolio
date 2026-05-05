"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Loader2, Mail, Phone, Calendar } from "lucide-react";
import toast from "react-hot-toast";

type Lead = {
  id: number;
  name: string;
  email: string;
  instagram_or_phone: string;
  message: string;
  created_at: string;
};

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) return;

    setIsLoading(true);
    try {
      const res = await fetch("/api/admin/leads", {
        headers: {
          Authorization: `Bearer ${password}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Authentication failed");
        setIsLoading(false);
        return;
      }

      setLeads(data.leads);
      setIsAuthenticated(true);
      toast.success("Successfully authenticated");
    } catch (error) {
      toast.error("Failed to fetch leads");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Admin Dashboard</CardTitle>
            <CardDescription className="text-center text-zinc-400">
              Enter your password to view leads.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="password"
                placeholder="Enter password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-zinc-800 border-zinc-700 text-white"
              />
              <Button 
                type="submit" 
                className="w-full bg-white text-black hover:bg-zinc-200"
                disabled={isLoading}
              >
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                Access Dashboard
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Leads Dashboard</h1>
            <p className="text-zinc-400 mt-1">You have {leads.length} potential clients.</p>
          </div>
          <Button 
            variant="outline" 
            onClick={() => setIsAuthenticated(false)}
            className="border-zinc-800 text-zinc-300 hover:bg-zinc-800 hover:text-white"
          >
            Logout
          </Button>
        </div>

        {leads.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-zinc-800 rounded-lg">
            <p className="text-zinc-500">No leads found yet. Once someone fills out your contact form, they will appear here.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leads.map((lead) => (
              <Card key={lead.id} className="bg-zinc-900 border-zinc-800 flex flex-col">
                <CardHeader className="pb-4 border-b border-zinc-800">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-semibold text-white truncate pr-2">
                      {lead.name}
                    </CardTitle>
                    <Badge variant="secondary" className="bg-blue-500/10 text-blue-400 shrink-0">
                      New Lead
                    </Badge>
                  </div>
                  <div className="flex items-center text-zinc-400 text-sm mt-2">
                    <Calendar className="w-4 h-4 mr-2 shrink-0" />
                    {new Date(lead.created_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </div>
                </CardHeader>
                <CardContent className="pt-4 flex-grow flex flex-col space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-zinc-300">
                      <Mail className="w-4 h-4 mr-3 text-zinc-500 shrink-0" />
                      <a href={`mailto:${lead.email}`} className="hover:text-white truncate transition-colors">
                        {lead.email}
                      </a>
                    </div>
                    {lead.instagram_or_phone && (
                      <div className="flex items-center text-sm text-zinc-300">
                        <Phone className="w-4 h-4 mr-3 text-zinc-500 shrink-0" />
                        <span className="truncate">{lead.instagram_or_phone}</span>
                      </div>
                    )}
                  </div>
                  <div className="mt-auto pt-4 border-t border-zinc-800">
                    <p className="text-sm font-medium text-zinc-400 mb-2">Message:</p>
                    <p className="text-sm text-zinc-300 whitespace-pre-wrap break-words bg-zinc-950 p-3 rounded-md">
                      {lead.message || "No message provided."}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
