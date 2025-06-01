# Setting Up GitHub Secrets for Cloudflare Pages Deployment

After creating your Cloudflare API token, you need to add it as a secret to your GitHub repository to enable automated deployments. This guide walks you through the process.

## What You Need

1. **Cloudflare Account ID**: 
   - Found in your Cloudflare dashboard URL: `https://dash.cloudflare.com/ACCOUNT_ID`
   - Or in the Overview section of your Cloudflare account

2. **Cloudflare API Token**:
   - The token you created with "Cloudflare Pages - Edit" permissions

## Adding Secrets to GitHub

1. Navigate to your GitHub repository at https://github.com/eklasdev/bangladesh-voter-helper

2. Click on **Settings** tab (near the top of the page)

3. In the left sidebar, click on **Secrets and variables** then select **Actions**

4. Click the **New repository secret** button

5. Add the first secret:
   - Name: `CLOUDFLARE_ACCOUNT_ID`
   - Value: Your Cloudflare Account ID
   - Click "Add secret"

6. Click the **New repository secret** button again

7. Add the second secret:
   - Name: `CLOUDFLARE_API_TOKEN`
   - Value: Your Cloudflare API Token
   - Click "Add secret"

## Verifying Setup

1. After adding both secrets, they should appear in the list of repository secrets.

2. To test the workflow, make a small change to any file in your repository, commit, and push to GitHub.

3. Go to the "Actions" tab in your GitHub repository to see if the workflow runs successfully.

4. If successful, your application will be deployed to Cloudflare Pages and available at `https://bangladesh-voter-helper.pages.dev`

## Troubleshooting

If the workflow fails, check:

1. Your API Token has the correct permissions
2. The Account ID is entered correctly
3. The GitHub workflow YAML file has the correct configuration
4. The project name in the workflow matches the name in Cloudflare Pages

Remember to keep your API tokens secure and never commit them directly to your repository.

