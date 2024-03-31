// src/routes/(private)/home/+page.server.ts
import { supabase } from "$lib/supabase/supabaseClient";
import { randomUUID } from 'crypto';
import type { Actions } from './$types';
import { redirect } from "@sveltejs/kit";

// Asegúrate de que esta función esté correctamente importada o definida.
async function generateUniqueID() {
  const id = crypto.randomUUID();
  const { data, error } = await supabase
    .from("forms")
    .select("id")
    .eq("id", id);

  if (error) {
    return generateUniqueID();
  }

  if (data.length === 0) {
    return id;
  } else {
    return generateUniqueID();
  }
}

export const actions: Actions = {
    create: async ({ request }) => {
      const form = await request.formData();
      const name = form.get("name");
  
      const id = await generateUniqueID();
  
      const { error: supabaseError } = await supabase
        .from("forms")
        .insert([{ id, name }]);
  
      if (supabaseError) {
        return {
          status: 500,
          errors: { message: supabaseError.message },
        };
      }
  
      throw redirect(303, `/formjs/${id}`);
    },
}




export async function load() {
    const { data, error } = await supabase
        .from('forms')
        .select('*')
        .limit(1);

    if (error) {
        console.error('Error cargando datos:', error);
        return { forms: [] };
    }

    return {
        props: {
            forms: data
        }
    };
}