import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://adzvyuqyvmxqkyuctxmh.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkenZ5dXF5dm14cWt5dWN0eG1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU3NDM0NDksImV4cCI6MjA2MTMxOTQ0OX0.aLe_LdgNO16RXxb-KOmXtZkzp-H-DPOvZXEhN5-eEEM',
)
