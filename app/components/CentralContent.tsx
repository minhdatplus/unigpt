import { Mic } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function CentralContent() {
  return (
    <div className="flex-grow flex flex-col bg-white ml-64 mr-64">
      <header className="bg-white border-b border-gray-200 p-4 flex items-center justify-between fixed top-0 left-64 right-64">
        <h1 className="text-xl font-semibold">Google</h1>
        <div className="flex items-center space-x-2">
          {/* Add icons for refresh, copy, etc. if needed */}
        </div>
      </header>
      <div className="flex-grow overflow-y-auto p-6 mt-16 mb-24">
        <div className="flex flex-col items-center justify-center min-h-full">
          <Card className="w-full max-w-2xl shadow-lg">
            <CardContent className="pt-6 flex flex-col items-center">
              <div className="text-6xl font-bold mb-4 text-blue-600">G</div>
              <h2 className="text-xl mb-8 text-gray-700">How can I help you today?</h2>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="p-4 border-t border-gray-200 fixed bottom-0 left-64 right-64 bg-white">
        <div className="max-w-2xl mx-auto relative">
          <Input placeholder="Message Gemini" className="pr-10" />
          <Button size="icon" variant="ghost" className="absolute right-2 top-1/2 transform -translate-y-1/2">
            <Mic className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}