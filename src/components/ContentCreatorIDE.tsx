'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Youtube, Instagram, Music2, Linkedin, FileText, Sun, Moon, Sparkles, ThumbsUp, ThumbsDown, BarChart2, ChevronRight, ChevronLeft } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function ContentCreatorIDE() {
  const { theme, setTheme } = useTheme()
  const [chatMessages, setChatMessages] = useState([])
  const [inputMessage, setInputMessage] = useState('')
  const [isChatVisible, setIsChatVisible] = useState(true)

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const toggleChatVisibility = () => {
    setIsChatVisible(!isChatVisible)
  }

  const startNewChat = () => {
    setChatMessages([])
  }

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputMessage.trim()) {
      const newMessage = { sender: 'You', content: inputMessage, timestamp: new Date().toLocaleString() }
      const creatorResponse = { sender: 'Creator', content: "Hello! How can I assist you with your content today?", timestamp: new Date().toLocaleString() }
      setChatMessages([...chatMessages, newMessage, creatorResponse])
      setInputMessage('')
    }
  }

  return (
    <div className="flex flex-col h-screen">
      {/* Top Bar */}
      <div className="flex flex-col items-center justify-between p-2 border-b">
        <div className="flex justify-between w-full mb-2">
          <div className="flex space-x-4">
            {['File', 'Edit', 'View', 'Tools', 'Studio', 'Help'].map((item) => (
              <Button key={item} variant="ghost" className="text-sm">{item}</Button>
            ))}
          </div>
          <Button onClick={toggleTheme} variant="ghost" size="icon">
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>
        <div className="w-full max-w-2xl">
          <Input 
            type="search" 
            placeholder="Search" 
            className="w-full"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-12 flex flex-col items-center py-4 space-y-4 bg-secondary">
          <Youtube className="w-6 h-6" />
          <Instagram className="w-6 h-6" />
          <Music2 className="w-6 h-6" />
          <Linkedin className="w-6 h-6" />
          <FileText className="w-6 h-6" />
        </div>

        {/* Main Editor Area */}
        <div className="flex-1 p-4 flex">
          <Textarea 
            placeholder="Start creating your content here..." 
            className={`w-full h-full resize-none transition-all duration-300 ease-in-out ${
              isChatVisible ? 'mr-80' : 'mr-0'
            }`}
          />
        </div>

        {/* Chat Panel Toggle Button */}
        <Button
          onClick={toggleChatVisibility}
          variant="ghost"
          size="icon"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-secondary"
        >
          {isChatVisible ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </Button>

        {/* Right Sidebar - AI Assistant */}
        <div 
          className={`w-80 flex flex-col absolute right-0 top-0 bottom-0 bg-secondary
          transition-all duration-300 ease-in-out ${
            isChatVisible ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <ScrollArea className="flex-1">
            {chatMessages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center p-4">
                <p className="mb-2">No past conversations</p>
                <p className="mb-4">Start your first conversation</p>
                <Button onClick={startNewChat} className="bg-primary text-primary-foreground hover:bg-primary/90">
                  New Chat
                </Button>
              </div>
            ) : (
              <div className="p-4 space-y-4">
                {chatMessages.map((msg, index) => (
                  <div key={index} className={`flex flex-col ${msg.sender === 'You' ? 'items-end' : 'items-start'}`}>
                    <div className={`flex items-center space-x-2 ${msg.sender === 'You' ? 'flex-row-reverse' : ''}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${msg.sender === 'You' ? 'bg-blue-500' : 'bg-primary'}`}>
                        {msg.sender === 'You' ? 'JH' : <Sparkles className="w-4 h-4" />}
                      </div>
                      <span className="text-sm text-muted-foreground">{msg.sender}</span>
                      <span className="text-xs text-muted-foreground">{msg.timestamp}</span>
                    </div>
                    <div className={`mt-1 p-2 rounded-lg ${msg.sender === 'You' ? 'bg-blue-600' : 'bg-secondary'}`}>
                      {msg.content}
                    </div>
                    {msg.sender === 'Creator' && (
                      <div className="flex space-x-2 mt-1">
                        <Button variant="ghost" size="icon"><ThumbsUp className="w-4 h-4" /></Button>
                        <Button variant="ghost" size="icon"><ThumbsDown className="w-4 h-4" /></Button>
                        <Button variant="ghost" size="icon"><BarChart2 className="w-4 h-4" /></Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </ScrollArea>
          <div className="p-4 border-t">
            <form onSubmit={sendMessage} className="flex flex-col space-y-2">
              <Input 
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask anything - use '@' to mention code"
              />
              <div className="flex justify-between items-center">
                <Button variant="link" className="text-sm text-muted-foreground">
                  Advanced
                </Button>
                <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Send
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}