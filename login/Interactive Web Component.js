

<div class="flex flex-col items-center justify-center h-screen bg-background">
  <div class="max-w-md w-full p-6 bg-card rounded-lg shadow-lg">
    <img src="https://placehold.co/300x300?text=😺" alt="Cat Icon" class="mx-auto mb-4" />
    <h2 class="text-2xl font-bold text-primary-foreground mb-4">Login</h2>
    <form class="space-y-4">
      <div>
        <label for="username" class="block text-sm font-medium text-primary-foreground">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          class="w-full px-3 py-2 bg-input text-primary-foreground placeholder-primary-foreground border border-primary rounded-lg focus:outline-none focus:ring focus:ring-primary"
        />
      </div>
      <div>
        <label for="password" class="block text-sm font-medium text-primary-foreground">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          class="w-full px-3 py-2 bg-input text-primary-foreground placeholder-primary-foreground border border-primary rounded-lg focus:outline-none focus:ring focus:ring-primary"
        />
      </div>
      <button type="submit" class="w-full bg-primary text-primary-foreground hover:bg-primary/80 py-2 rounded-lg">Login</button>
    </form>
  </div>
</div>

