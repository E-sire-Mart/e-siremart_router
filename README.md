# E-Siremart Router

This is a simple HTML-based router for the E-Siremart platform, providing unified access to three different applications:

- **User Portal**: `/user` - Customer-facing e-commerce application
- **Vendor Portal**: `/vendor` - Vendor management application  
- **Admin Portal**: `/admin` - Administrative dashboard

## Architecture

```
e-siremart.com/
├── /user     → e-sirefront-end-ou6d3gpgk-mykolas-projects-fd645fac.vercel.app
├── /vendor   → vendor-side.vercel.app
├── /admin    → new-admin-brown.vercel.app
└── /api      → esirebackend.onrender.com
```

## How It Works

This router uses a simple HTML page with Vercel's rewrite rules to:

1. **Serve a landing page** at the root domain (`e-siremart.com`)
2. **Route traffic** to the appropriate applications using Vercel rewrites
3. **Avoid Vercel verification pages** by using static HTML instead of Next.js

## Files

- `index.html` - The main landing page with portal links
- `vercel.json` - Vercel configuration with rewrite rules
- `README.md` - This documentation

## Deployment to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy the application

## Domain Configuration

### DNS Settings (Hostinger)

Configure your DNS settings in Hostinger with the following records:

1. **A Record**:
   - Name: `@`
   - Value: `76.76.19.19` (Vercel's IP)

2. **CNAME Record**:
   - Name: `www`
   - Value: `your-vercel-app.vercel.app`

### Vercel Domain Configuration

1. Go to your Vercel dashboard
2. Select your router project
3. Go to Settings → Domains
4. Add your custom domain: `e-siremart.com`
5. Add `www.e-siremart.com` as well

## Features

- **Clean landing page** with portal selection
- **Auto-redirect** to user portal after 3 seconds
- **Responsive design** for mobile and desktop
- **No framework dependencies** - pure HTML/CSS/JS
- **Fast loading** - no build process required

## Testing Routes

- Main Site: `https://e-siremart.com`
- User Portal: `https://e-siremart.com/user`
- Vendor Portal: `https://e-siremart.com/vendor`
- Admin Portal: `https://e-siremart.com/admin`
- API: `https://e-siremart.com/api`

## Troubleshooting

### Common Issues

1. **Domain not loading**: Check DNS propagation (can take up to 48 hours)
2. **Routing not working**: Verify the destination URLs in `vercel.json`
3. **SSL issues**: Ensure SSL is enabled in Vercel

## Security Considerations

- All routes are configured with proper security headers
- CORS is handled by the destination applications
- SSL is enforced for all connections

## Support

For issues related to:
- Router: Check this repository
- User Portal: Check the user application repository
- Vendor Portal: Check the vendor application repository
- Admin Portal: Check the admin application repository
- Backend API: Check the backend repository
