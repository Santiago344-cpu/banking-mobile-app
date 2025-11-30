import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill';

const SUPABASE_URL = 'https://ntwdazxeujryxnyiennq.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50d2RhenhldWpyeXhueWllbm5xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ1NDEwMTksImV4cCI6MjA4MDExNzAxOX0.hUdl_fJnZ8ZG5Pda4ISROxpxPfRnaC2Xh7_uD_6277U';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);