# Deployment Guide for Vercel

## 🚀 Quick Fix for 404 Errors

### 1. **Vercel Configuration**
The `vercel.json` file has been created to handle client-side routing:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### 2. **Environment Variables**
Set these in your Vercel dashboard:

**Environment Variables to Add:**
- `VITE_BASE_URL` = `https://linked-posts.routemisr.com`

**How to add:**
1. Go to your Vercel project dashboard
2. Click on "Settings"
3. Go to "Environment Variables"
4. Add the variable above
5. Redeploy your project

### 3. **Favicon Fixed**
- Added `favicon.svg` to the public folder
- Updated `index.html` to reference the correct favicon

### 4. **Redeploy Steps**
1. Commit and push your changes:
   ```bash
   git add .
   git commit -m "fix: add Vercel configuration and favicon"
   git push
   ```

2. Vercel will automatically redeploy

### 5. **Test Your Routes**
After deployment, test these URLs:
- `https://your-app.vercel.app/` (should show FeedPage)
- `https://your-app.vercel.app/register` (should show RegisterPage)
- `https://your-app.vercel.app/login` (should show LoginPage)

## 🔧 Troubleshooting

If you still get 404 errors:
1. Check that `vercel.json` is in your root directory
2. Verify environment variables are set in Vercel dashboard
3. Make sure you're using the correct domain
4. Clear browser cache and try again

## 📝 Notes
- The `vercel.json` file tells Vercel to serve `index.html` for all routes
- This allows React Router to handle client-side routing
- Environment variables must be set in Vercel dashboard for production
