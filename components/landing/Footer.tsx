export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between spacing-2">
          <div className="mb-8 md:mb-0">
            <h3 className="text-white font-bold text-xl mb-4">Playto</h3>
            <p className="body-sm max-w-md">
              The all-in-one mobile-first platform for creators, educators, and community leaders.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-white font-medium mb-4">Links</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="body-sm hover:text-white transition">Features</a></li>
                <li><a href="#vision" className="body-sm hover:text-white transition">Vision</a></li>
                <li><a href="#faq" className="body-sm hover:text-white transition">FAQ</a></li>
                <li><a href="#join" className="body-sm hover:text-white transition">Join Waitlist</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="body-sm hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="body-sm hover:text-white transition">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="body-sm hover:text-white transition">Twitter</a></li>
                <li><a href="#" className="body-sm hover:text-white transition">Instagram</a></li>
                <li><a href="#" className="body-sm hover:text-white transition">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-6 text-center">
          <p className="body-sm">© 2023 Playto. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 