import { Button } from "./components/ui/button";
import Blog from "./pages/Home/Blog/Blog";

export default function App() {
   return (
      <div className="container my-3">
         <Button>Click Me</Button>
         <Blog />
      </div>
   );
}
