import { Octokit } from 'https://cdn.pika.dev/@octokit/rest';

const octokit = new Octokit({
    auth: 'secret123',
    userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36',
    // previews: [],
    timeZone: 'America/Los_Angeles',
    baseUrl: 'https://api.github.com',
    log: {
        debug: () => {},
        info: () => {},
        warn: console.warn,
        error: console.error
    },
    request: {
        agent: undefined,
        fetch: undefined,
        timeout: 0
    }
});

// IIFE - immediately invoked function expression

(async function() {
    const data = await octokit.pulls.get({
        owner: 'octokit',
        repo: 'rest.js',
        pull_number: 123,
    });

    console.log(data);
})();


