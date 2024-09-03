import { MessageSquare, Paperclip, Bookmark, PlusCircle, EyeOff } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function RightPanel() {
  return (
    <div className="w-64 bg-white border-l border-gray-200 flex flex-col h-screen fixed right-0 top-0 overflow-hidden">
      <div className="p-4">
        <span className="text-sm font-semibold mb-4 block text-gray-700">gemini-1.5-flash-latest</span>
        <Button variant="ghost" className="w-full justify-start mb-2">
          <MessageSquare className="mr-2 h-4 w-4" />
          Prompts
        </Button>
        <Button variant="ghost" className="w-full justify-start mb-2">
          <Paperclip className="mr-2 h-4 w-4" />
          Attach Files
        </Button>
        <Button variant="ghost" className="w-full justify-start mb-4">
          <Bookmark className="mr-2 h-4 w-4" />
          Bookmarks
        </Button>
        <Input className="mb-4" placeholder="Filter bookmarks..." />
      </div>
      <div className="flex-grow overflow-y-auto px-4">
        <Card className="mb-4">
          <CardHeader>
            <CardTitle className="text-sm flex justify-between">
              <span>Title</span>
              <span>Count</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 mb-2">Showing 1 - 0 of 0</p>
            <div className="flex justify-between">
              <Button variant="ghost" size="sm">Prev</Button>
              <Button variant="ghost" size="sm">Next</Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="p-4 border-t border-gray-200">
        <Button variant="ghost" className="w-full justify-start mb-2">
          <PlusCircle className="mr-2 h-4 w-4" />
          New Bookmark
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <EyeOff className="mr-2 h-4 w-4" />
          Hide Panel
        </Button>
      </div>
    </div>
  );
}