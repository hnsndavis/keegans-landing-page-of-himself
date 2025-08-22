// Blog functionality for Substack integration
document.addEventListener('DOMContentLoaded', function() {
    loadBlogPosts();
});

async function loadBlogPosts() {
    const blogContainer = document.getElementById('blog-posts');
    
    // Blog posts linking to individual pages
    const blogPosts = [
        {
            title: "When Life Moves So Fast You Forget to Write it Down",
            excerpt: "Sometimes we're too busy living life to write about it - a week of transitions, new opportunities, and divine timing.",
            date: "The Messy Middle",
            link: "blog6.html"
        },
        {
            title: "A Beautiful Wonderful Majestic Mess",
            excerpt: "What happens when God moves before you even know you need Him to - a story of unexpected provision and divine timing.",
            date: "The Messy Middle",
            link: "blog5.html"
        },
        {
            title: "Are You a Sheep or a Donkey?",
            excerpt: "What I learned when 'What should I do?' got the same answer every time - about prayer, guidance, and divine wisdom.",
            date: "The Messy Middle",
            link: "blog4.html"
        },
        {
            title: "When the Dream Itself Feels Empty",
            excerpt: "What I learned after achieving everything I thought I wanted - and why the journey matters more than the destination.",
            date: "The Messy Middle", 
            link: "blog3.html"
        },
        {
            title: "Welcome to the Messy Middle", 
            excerpt: "Why the most important work happens in the space between shortcuts - exploring efficiency, relationships, and authentic growth.",
            date: "The Messy Middle",
            link: "blog2.html"
        },
        {
            title: "From Building Alone to Building Together",
            excerpt: "Why I'm building in public and bringing others into the process - the power of starting before you're ready.",
            date: "Notes from Keegan",
            link: "blog1.html"
        }
    ];

    // Clear existing content
    blogContainer.innerHTML = '';

    // Render blog posts
    blogPosts.forEach(post => {
        const postElement = createBlogPostElement(post);
        blogContainer.appendChild(postElement);
    });
}

function createBlogPostElement(post) {
    const article = document.createElement('article');
    article.className = 'blog-post';
    
    article.innerHTML = `
        <div class="blog-post-content">
            <h3><a href="${post.link}" style="text-decoration: none; color: inherit;">${post.title}</a></h3>
            <p>${post.excerpt}</p>
            <div class="blog-post-footer">
                <div class="blog-post-meta">${post.date}</div>
                <a href="${post.link}" class="read-more-btn">Read full post →</a>
            </div>
        </div>
    `;
    
    return article;
}

// Function to integrate with Substack RSS feed (for future implementation)
async function fetchSubstackPosts(substackUrl) {
    try {
        // Note: This would require a CORS proxy or server-side implementation
        // due to browser CORS restrictions when fetching RSS feeds directly
        const rssUrl = `${substackUrl}/feed`;
        const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`);
        const data = await response.json();
        
        if (data.status === 'ok') {
            return data.items.map(item => ({
                title: item.title,
                excerpt: item.description.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
                date: new Date(item.pubDate).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                }),
                link: item.link
            }));
        }
        throw new Error('Failed to fetch RSS feed');
    } catch (error) {
        console.error('Error fetching Substack posts:', error);
        return [];
    }
}

// Modal functionality
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
}

// Close modal when clicking outside of it
window.addEventListener('click', function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            closeModal(modal.id);
        }
    });
});

// Close modal on escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (modal.style.display === 'block') {
                closeModal(modal.id);
            }
        });
    }
});

// Uncomment and use this function when ready to integrate with live Substack feed:
// loadBlogPosts = async function() {
//     const blogContainer = document.getElementById('blog-posts');
//     const posts = await fetchSubstackPosts('https://keeganhdavis.substack.com');
//     
//     blogContainer.innerHTML = '';
//     
//     if (posts.length > 0) {
//         posts.slice(0, 6).forEach(post => {
//             const postElement = createBlogPostElement(post);
//             blogContainer.appendChild(postElement);
//         });
//     } else {
//         blogContainer.innerHTML = '<p>Unable to load recent posts. Please visit <a href="https://keeganhdavis.substack.com" target="_blank">my Substack</a> directly.</p>';
//     }
// };