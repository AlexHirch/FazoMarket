import CategoriesMobile from "../ui/categoriesMobile";
import PopularCategories from "../ui/popularCategories";
import ProductCheaperCart from "../ui/product-cheaper-cart";
import ProductMiniCart from "../ui/product-mini-cart";
import Slider from "../ui/slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <CategoriesMobile />
      <div className="Hot-Deals">
        <div className="texttt">
          <h4>Горящие предложения:</h4>
          <a href="#">Посмотреть все<i className="fa-solid fa-arrow-right"></i></a>
        </div>
        <ProductMiniCart />
        <ProductMiniCart />
        <ProductMiniCart />
        <ProductMiniCart />
        <ProductMiniCart />
        <ProductMiniCart />
        <ProductMiniCart />
        <ProductMiniCart />
        <ProductMiniCart />
        <ProductMiniCart />
      </div>
      <PopularCategories/>
      <div className="Cheaper-Deals">
        <div className="texttt">
          <h4>Товары дешевле:</h4>
          <a href="#">Посмотреть все<i className="fa-solid fa-arrow-right"></i></a>
        </div>
        <ProductCheaperCart />
        <ProductCheaperCart />
        <ProductCheaperCart />
        <ProductCheaperCart />
        <ProductCheaperCart />
        <ProductCheaperCart />
        <ProductCheaperCart />
        <ProductCheaperCart />
        <ProductCheaperCart />
        <ProductCheaperCart />
      </div>
    </div>
  );
};

export default Home;
