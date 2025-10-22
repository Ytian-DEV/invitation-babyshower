import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { toast } from 'sonner@2.0.3';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { Check, X, Loader2 } from 'lucide-react';
import { FloralBorder } from './FloralSVG';

export function RSVPForm() {
  const [name, setName] = useState('');
  const [attending, setAttending] = useState<boolean | null>(null);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error('Please enter your name');
      return;
    }

    if (attending === null) {
      toast.error('Please select if you can attend');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-4f8c49ac/rsvp`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({
            name: name.trim(),
            attending,
            message: message.trim(),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit RSVP');
      }

      setIsSubmitted(true);
      toast.success(
        attending
          ? "Thank you! We're excited to celebrate with you! 🎉"
          : "Thank you for letting us know. You'll be missed! 💝"
      );

      // Reset form
      setName('');
      setAttending(null);
      setMessage('');
    } catch (error) {
      console.error('RSVP submission error:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to submit RSVP. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Check if deadline has passed
  const now = new Date();
  const deadline = new Date('2026-04-01T23:59:59');
  const isPastDeadline = now > deadline;

  if (isPastDeadline) {
    return (
      <div className="relative">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <FloralBorder className="w-full h-full" />
        </div>

        <div className="bg-white/80 p-8 rounded-lg border-2 border-[#9C8B7A] text-center relative">
          <X className="w-16 h-16 text-[#9C8B7A] mx-auto mb-4" />
          <h3 className="text-2xl text-[#6B3E3A] mb-2">RSVP Closed</h3>
          <p className="text-[#9C8B7A]">
            The RSVP deadline has passed. Please contact the host directly for any inquiries.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Floral Border Frame */}
      <div className="absolute inset-0 -m-8 opacity-30 pointer-events-none">
        <FloralBorder className="w-full h-full" />
      </div>

      {/* Main RSVP Card */}
      <div className="relative bg-white p-8 md:p-12 rounded-lg shadow-xl border-2 border-[#C9A690]">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name" className="text-[#6B3E3A] mb-2 block text-base uppercase tracking-wider text-sm">
              Your Name *
            </Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="bg-[#F5F1EC] border-[#C9A690] text-[#6B3E3A] placeholder:text-[#9C8B7A]"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <Label className="text-[#6B3E3A] mb-4 block text-base uppercase tracking-wider text-sm">
              Will you be attending? *
            </Label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setAttending(true)}
                disabled={isSubmitting}
                className={`p-4 rounded-lg border-2 transition-all ${
                  attending === true
                    ? 'bg-[#6B3E3A] border-[#6B3E3A] text-white scale-105 shadow-lg'
                    : 'bg-white border-[#C9A690] text-[#6B3E3A] hover:bg-[#F5F1EC]'
                } disabled:opacity-50`}
              >
                <Check className="w-8 h-8 mx-auto mb-2" />
                <div className="text-sm">Yes, I'll be there!</div>
              </button>
              <button
                type="button"
                onClick={() => setAttending(false)}
                disabled={isSubmitting}
                className={`p-4 rounded-lg border-2 transition-all ${
                  attending === false
                    ? 'bg-[#9C8B7A] border-[#9C8B7A] text-white scale-105 shadow-lg'
                    : 'bg-white border-[#C9A690] text-[#6B3E3A] hover:bg-[#F5F1EC]'
                } disabled:opacity-50`}
              >
                <X className="w-8 h-8 mx-auto mb-2" />
                <div className="text-sm">Can't make it</div>
              </button>
            </div>
          </div>

          <div>
            <Label htmlFor="message" className="text-[#6B3E3A] mb-2 block text-base uppercase tracking-wider text-sm">
              Leave a message for Maria Chezka (Optional)
            </Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Share your birthday wishes..."
              rows={4}
              className="bg-[#F5F1EC] border-[#C9A690] text-[#6B3E3A] placeholder:text-[#9C8B7A] resize-none"
              disabled={isSubmitting}
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#6B3E3A] hover:bg-[#5A2D2A] text-white py-6 text-base tracking-widest uppercase disabled:opacity-50 shadow-lg"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit RSVP'
            )}
          </Button>
        </form>

        {isSubmitted && (
          <div className="mt-6 p-4 bg-[#E8DDD0] border-2 border-[#6B3E3A] rounded-lg text-center">
            <Check className="w-8 h-8 text-[#6B3E3A] mx-auto mb-2" />
            <p className="text-[#6B3E3A]">Your RSVP has been received!</p>
          </div>
        )}
      </div>
    </div>
  );
}
