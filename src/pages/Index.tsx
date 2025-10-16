// This is the default landing page of the app
// The content here is a fallback placeholder until the page is updated

const Index = () => {
  return (
    // Full-height container centered both vertically and horizontally
    <div className="flex min-h-screen items-center justify-center bg-background">
      
      {/* Centered content block */}
      <div className="text-center">
        {/* Main heading */}
        <h1 className="mb-4 text-4xl font-bold">
          Welcome to Your Blank App
        </h1>

        {/* Subtext / description */}
        <p className="text-xl text-muted-foreground">
          Start building your amazing project here!
        </p>
      </div>
    </div>
  );
};

// Export the component as default for routing
export default Index;
