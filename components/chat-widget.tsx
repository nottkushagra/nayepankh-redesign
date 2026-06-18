"use client";

import { useChat } from "ai/react";
import { Bot, Loader2, MessageCircle, Send, X } from "lucide-react";
import { useState } from "react";

const suggestions = [
  "How can I volunteer?",
  "Tell me about internships.",
  "Are donations tax exempt?",
  "What programs does NayePankh run?"
];

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, append, isLoading, error } = useChat({
    api: "/api/chat",
    initialMessages: [
      {
        id: "welcome",
        role: "assistant",
        content: "Hi, I can help with volunteering, internships, donations, programs and navigation."
      }
    ]
  });

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="mb-3 flex h-[min(620px,calc(100vh-120px))] w-[min(390px,calc(100vw-40px))] flex-col overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-2xl dark:border-white/10 dark:bg-slate-950">
          <div className="flex items-center justify-between border-b border-slate-100 p-4 dark:border-white/10">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-brand-blue">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-brand-ink dark:text-white">NayePankh AI</p>
                <p className="text-xs text-slate-500">Powered by Gemini when configured</p>
              </div>
            </div>
            <button type="button" aria-label="Close chat" onClick={() => setOpen(false)} className="rounded-full p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-white/10">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((message) => (
              <div key={message.id} className={message.role === "user" ? "text-right" : "text-left"}>
                <div className={`inline-block max-w-[86%] rounded-[8px] px-3 py-2 text-sm leading-6 ${message.role === "user" ? "bg-brand-blue text-white" : "bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-200"}`}>
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="inline-flex items-center gap-2 rounded-[8px] bg-slate-100 px-3 py-2 text-sm text-slate-600 dark:bg-slate-900 dark:text-slate-300">
                <Loader2 className="h-4 w-4 animate-spin" />
                Thinking
              </div>
            )}
            {error && (
              <p className="rounded-md bg-red-50 px-3 py-2 text-xs text-red-700">
                The AI service is unavailable right now. Try again later or contact {`contact@nayepankh.com`}.
              </p>
            )}
          </div>
          <div className="grid gap-2 border-t border-slate-100 p-3 dark:border-white/10">
            <div className="flex gap-2 overflow-x-auto pb-1">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => append({ role: "user", content: suggestion })}
                  className="shrink-0 rounded-full border border-slate-200 px-3 py-1.5 text-xs text-slate-600 hover:border-brand-blue hover:text-brand-blue dark:border-white/10 dark:text-slate-300"
                >
                  {suggestion}
                </button>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                value={input}
                onChange={handleInputChange}
                placeholder="Ask about volunteering..."
                className="min-h-11 flex-1 rounded-full border border-slate-200 px-4 text-sm outline-none focus:border-brand-blue dark:border-white/10 dark:bg-slate-900"
              />
              <button type="submit" aria-label="Send message" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-blue text-white hover:bg-blue-700">
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      )}
      <button
        type="button"
        aria-label="Open AI assistant"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue text-white shadow-glow transition hover:-translate-y-1 hover:bg-blue-700"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
}
