# Shopify Email Templates

Creating custom email templates can be tedious with Shopify. You have to login to the admin of your store and edit each template repetitively using their editor. This repo tries to make this process a little bit easier. You will still have to manually copy and paste the templates from your local machine to the admin editor, but you can more easily edit the custom email template locally to make this process much quicker.

#### Workflow:

1. Run the `grunt` task from the root of the repo
2. Open up the email template you want to edit in `src/[template-name].liquid`
3. Add any new styles to the `assets/notifications/custom-styles.css` stylesheet and change any of the markup
4. Grunt will automatically detect when you make changes and will compile a finished email templates with all of the CSS automatically inlined, ready to upload to the Shopify admin. These compiled templates are found in `dest/[template-name].inlined.html`
5. Go to the Shopify admin `/admin/email_templates/` and find the email template you are editing. Paste the contents of `dest/[template-name].inlined.html` into the editor and you can then preview the changes. Make further changes locally, paste it again into the editor and preview, and so on ...

It's not perfect but it's a start ;)
 
#### Notes

- The reuseable elements of the email templates (such as the header and footer) have been moved to the `assets/snippts` folder. This means you can easily edit these elements once without having to then copy and paste the changes to *every* other template
