// src/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wuwhhswyhmwytedrwdsr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1d2hoc3d5aG13eXRlZHJ3ZHNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1NjkyMjUsImV4cCI6MjA2NDE0NTIyNX0.46z7zzaZW7RsogdtAaxpysnnZclrR5B76-CgI1y9-gk';
export const supabase = createClient(supabaseUrl, supabaseKey);