import resume from '../data/resume.json';

export const prerender = true;

export function GET() {
  return new Response(JSON.stringify(resume, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
