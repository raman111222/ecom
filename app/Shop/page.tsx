import Carousel from "@/Components/carouselCard";
import Navbar from "@/Components/navbar";

export default function Shop() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center">
        <Carousel
          name="Sunlight lamp"
          desciption="fjknfkjnvksfkvnsfkvjnsfkjvjnsfkvnksfjnvksfnvkjsnvfjknfkjnvksfkvnsfkvjnsfkjvjnsfkvnksfjnvksfnvkjsnvfjknfkjnvksfkvnsfkvjnsfkjvjnsfkvnksfjnvksfnvkjsnvfjknfkjnvksfkvnsfkvjnsfkjvjnsfkvnksfjnvksfnvkjsnvk"
          image="/shopping.jpg"
          price={24}
        />
      </div>
    </div>
  );
}
