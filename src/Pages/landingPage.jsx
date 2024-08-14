const landingPage = () => {
    return (
        <body class="bg-gray-100">

       
        <header class="bg-white shadow">
            <div class="container mx-auto flex justify-between items-center py-4 px-6">
                <div class="text-xl font-bold text-gray-800">My Company</div>
                <nav class="space-x-4">
                    <a href="#" class="text-gray-600 hover:text-gray-800">Home</a>
                    <a href="#" class="text-gray-600 hover:text-gray-800">Features</a>
                    <a href="#" class="text-gray-600 hover:text-gray-800">Pricing</a>
                    <a href="#" class="text-gray-600 hover:text-gray-800">Contact</a>
                </nav>
            </div>
        </header>
    
        
        <section class="bg-blue-600 text-white">
            <div class="container mx-auto flex flex-col items-center py-20 px-6">
                <h1 class="text-4xl font-bold mb-4">Welcome to Our Landing Page</h1>
                <p class="text-lg mb-8">Discover our amazing product that will help you achieve your goals.</p>
                <a href="#" class="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-200">Get Started</a>
            </div>
        </section>
    
        
        <section class="container mx-auto py-20 px-6">
            <h2 class="text-3xl font-bold text-center mb-12">Features</h2>
            <div class="flex flex-wrap -mx-4">
                <div class="w-full md:w-1/3 px-4 mb-8">
                    <div class="bg-white shadow rounded-lg p-6">
                        <div class="text-blue-600 mb-4">
                            <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M5 13a1 1 0 0 0-1 1v3h1.3a1 1 0 1 0 0-2H5v-2a1 1 0 0 0-1-1zM19 13a1 1 0 0 0-1 1v3h1.3a1 1 0 1 0 0-2H19v-2a1 1 0 0 0-1-1z"></path></svg>
                        </div>
                        <h3 class="text-xl font-semibold mb-4">Feature One</h3>
                        <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                    </div>
                </div>
                <div class="w-full md:w-1/3 px-4 mb-8">
                    <div class="bg-white shadow rounded-lg p-6">
                        <div class="text-blue-600 mb-4">
                            <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M5 13a1 1 0 0 0-1 1v3h1.3a1 1 0 1 0 0-2H5v-2a1 1 0 0 0-1-1zM19 13a1 1 0 0 0-1 1v3h1.3a1 1 0 1 0 0-2H19v-2a1 1 0 0 0-1-1z"></path></svg>
                        </div>
                        <h3 class="text-xl font-semibold mb-4">Feature Two</h3>
                        <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                    </div>
                </div>
                <div class="w-full md:w-1/3 px-4 mb-8">
                    <div class="bg-white shadow rounded-lg p-6">
                        <div class="text-blue-600 mb-4">
                            <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M5 13a1 1 0 0 0-1 1v3h1.3a1 1 0 1 0 0-2H5v-2a1 1 0 0 0-1-1zM19 13a1 1 0 0 0-1 1v3h1.3a1 1 0 1 0 0-2H19v-2a1 1 0 0 0-1-1z"></path></svg>
                        </div>
                        <h3 class="text-xl font-semibold mb-4">Feature Three</h3>
                        <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                    </div>
                </div>
            </div>
        </section>
    
        
        <footer class="bg-gray-800 text-white py-6">
            <div class="container mx-auto text-center">
                <p>&copy; 2024 My Company. All rights reserved.</p>
            </div>
        </footer>
    
    </body>
            )
}
export default landingPage;