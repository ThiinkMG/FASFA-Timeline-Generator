export function Footer() {
  return (
    <footer className="mt-12 border-t bg-muted/50 py-6 sm:py-8">
      <div className="container px-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* MCF Info */}
          <div>
            <h3 className="font-semibold mb-3">My College Finance</h3>
            <p className="text-sm text-muted-foreground">
              Empowering students with financial education tools.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.mycollegefinance.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="https://www.mycollegefinance.com/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://www.mycollegefinance.com/terms-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-3">Connect</h3>
            <a
              href="https://linktr.ee/mycollegefinance"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:underline"
              style={{ color: 'var(--brand-blue)' }}
            >
              Social Media Hub
            </a>
          </div>

          {/* Copyright */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} My College Finance
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
