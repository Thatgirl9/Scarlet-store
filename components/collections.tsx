import BodyCons from "@/public/images/unsplash_h5cd51KXmRQ.png";
import CropTops from "@/public/images/unsplash_MYbhN8KaaEc.png";
import Trousers from "@/public/images/unsplash_wINNAh0IeCg.png";
import Image from "next/image";
import Link from "next/link";
const Collections: React.FC = () => {
  return (
    <main className="mt-[1em] md:px-14 px-6">
      <h1 className="font-fontInter text-2xl font-extrabold uppercase text-black-primary">
        Collections
      </h1>

      <div className="grid grid-cols-2 mt-[2em] gap-[2em]">
        <div className=" body-cons flex justify-start items-end p-[1.6em]">
          <div className="bg-white-opacity p-[1.1em] w-[14em]">
            <div>
              <p className="uppercase text-gray-primary font-medium">New In</p>
              <h3 className="uppercase text-black-primary font-extrabold text-xl">
                Body Cons
              </h3>

              <Link
                href=""
                className="font-fontRaleway text-base text-orange-primary underline font-bold underline-offset-1"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-rows-2 gap-[2em]">
          <div className=" crop-tops flex justify-start items-end p-[1.6em]">
            <div className="bg-white-opacity p-[1.1em] w-[14em]">
              <div>
                <p className="uppercase text-gray-primary font-medium">
                  New In
                </p>
                <h3 className="uppercase text-black-primary font-extrabold text-xl">
                  Crop Tops
                </h3>

                <Link
                  href=""
                  className="font-fontRaleway text-base text-orange-primary underline font-bold underline-offset-1"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
          <div className="trousers flex justify-start items-end p-[1.6em]">
            <div className="bg-white-opacity p-[1.1em] w-[14em]">
              <div>
                <p className="uppercase text-gray-primary font-medium">
                  New In
                </p>
                <h3 className="uppercase text-black-primary font-extrabold text-xl">
                  Trousers
                </h3>

                <Link
                  href=""
                  className="font-fontRaleway text-base text-orange-primary underline font-bold underline-offset-1"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>

          {/* <Image
            src={CropTops}
            alt="An Image of a Crop Top"
            className="h-full"
          />
          <Image
            src={Trousers}
            alt="An Image of a Pair of Trousers"
            className="h-full"
          /> */}
        </div>

        <div></div>
      </div>
    </main>
  );
};

export default Collections;