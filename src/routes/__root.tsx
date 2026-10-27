import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { AppShell } from "@/components/shell";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sổ Mực" },
      { name: "theme-color", content: "#f3eee6" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,560;9..144,640&family=Outfit:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: "if(!Object.hasOwn)Object.hasOwn=function(o,k){return Object.prototype.hasOwnProperty.call(o,k)};if(!String.prototype.replaceAll)String.prototype.replaceAll=function(a,b){return a instanceof RegExp?this.replace(a,b):this.split(a).join(b)};if(!Array.prototype.at)Object.defineProperty(Array.prototype,'at',{value:function(n){n=Math.trunc(n)||0;if(n<0)n+=this.length;return this[n]},writable:true,configurable:true});if(!window.structuredClone)window.structuredClone=function(v){return JSON.parse(JSON.stringify(v))};" }} />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var r=localStorage.getItem('so-muc-v1');if(r){var t=JSON.parse(r).theme;if(t==='dark'||t==='light')document.documentElement.dataset.theme=t}}catch(e){}",
          }}
        />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <AppShell>
            <Outlet />
          </AppShell>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
