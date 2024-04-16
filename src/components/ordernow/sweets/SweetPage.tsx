import { SweetData } from "./SweetData";
import lines1 from "../../../assets/images/lines1.png";
import { useDispatch } from "react-redux";
import { addItem } from "../../home/header/header-comp/cart/CartSlice";
import { SqCardPropType } from "../../../utils/types/Types";
import { motion } from "framer-motion";

function SweetPage() {
  const dispatch = useDispatch();
  function handleAddCartItem({ item }: SqCardPropType) {
    // @ts-ignore
    dispatch(addItem(item));
  }

  return (
    <div className="main_head flex flex-col md:p-12 p-4 gap-20">
      <div className="flex flex-col justify-center items-center">
        <img src={lines1} alt="designed-arrow" className=" w-4/6 md:w-2/6" />
        <h1 className="text-4xl text-center font-semibold">Delicious Sweets</h1>
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-3 md:gap-y-12 px-2 md:px-12 gap-5">
        {SweetData.map((item) => {
          return (
            <div className=" relative rounded-lg object-cover">
              <img
                src={item.img}
                alt=""
                className="rounded-lg md:w-full md:h-full"
              />
              <div className="absolute bottom-0 md:bottom-1 right-0 md:right-1 left-0 md:left-1 bg-black opacity-80  text-white flex justify-between items-center px-1 md:px-4 py-3 rounded-lg">
                <p className="">&#8377;{item.itemOfferAmount}</p>
                <motion.button
                  onClick={() => {
                    handleAddCartItem({ item: { ...item, quantity: 1 } });
                  }}
                  className="border border-white bg-transparent px-1 md:px-6 md:py-1 rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.btntext}
                </motion.button>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default SweetPage;
