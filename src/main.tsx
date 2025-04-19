import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CartProvider } from "./components/context/CartContext.tsx";
import { WhishListProvider } from "./components/context/WhishlistContext.tsx";

createRoot(document.getElementById("root")!).render(
  <CartProvider>
    <WhishListProvider>
      <App />
    </WhishListProvider>
  </CartProvider>
);
