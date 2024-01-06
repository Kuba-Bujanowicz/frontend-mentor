import type { APIRoute } from 'astro'
import * as v from "valibot";

export const POST: APIRoute = async ({ request, cookies, redirect, url }) => {
    // Get the email address from the request body
    const data = await request.formData();
    const email = data.get('email');
    const emailSchema = v.string([
        v.minLength(1, "Please enter an email address"),
        v.email("Please enter a valid email address"),
    ]);

    cookies.set('data', email as string)

    try {
        v.parse(emailSchema, email);
    } catch (error: any) {
        cookies.set('error', error.message)
        return redirect('/', 301)
    }

    return redirect('/newsletter-success', 301)
}
