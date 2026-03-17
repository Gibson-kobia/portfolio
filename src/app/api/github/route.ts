import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // In a real scenario, you'd fetch from GitHub API using a token
    // For this demo, we'll return simulated data but with the correct structure
    // const res = await fetch('https://api.github.com/users/yourusername', {
    //   headers: { Authorization: `token ${process.env.GITHUB_TOKEN}` }
    // });
    // const data = await res.json();

    const stats = {
      stars: 156,
      commits: 42,
      repos: 24,
      followers: 89,
    };

    return NextResponse.json(stats);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch GitHub stats' }, { status: 500 });
  }
}
