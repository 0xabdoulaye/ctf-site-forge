
import { Mail, MessageSquare } from "lucide-react";

export const Contact = () => {
  return (
    <div className="py-20 bg-[#141B2D]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">Get in Touch</h2>
        <div className="max-w-md mx-auto">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-accent" />
              <a href="mailto:team@bytebreaches.com" className="text-secondary hover:text-primary transition-colors">
                team@bytebreaches.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <MessageSquare className="w-6 h-6 text-accent" />
              <a href="https://discord.gg/bytebreachers" className="text-secondary hover:text-primary transition-colors">
                Join our Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
