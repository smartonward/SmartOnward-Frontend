"use server";

import { createClient } from "@supabase/supabase-js";

export async function submitLead(formData: FormData) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.error("Supabase environment variables are missing.");
      return { success: false, error: "Configuration error. Please try again later." };
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const website = formData.get("website") as string;
    const details = formData.get("details") as string;
    const selectedFocus = formData.get("selectedFocus") as string;

    const { data, error } = await supabase
      .from("leads")
      .insert([
        {
          name,
          email,
          website,
          details,
          focus_areas: selectedFocus,
        },
      ]);

    if (error) {
      console.error("Supabase Insert Error:", error.message);
      return { success: false, error: "Failed to save data. Please try again." };
    }

    return { success: true };
  } catch (err: any) {
    console.error("Unexpected Error in submitLead:", err);
    return { success: false, error: "Something went wrong." };
  }
}
