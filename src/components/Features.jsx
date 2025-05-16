import { Clock, Gift, Package, RefreshCcw } from "lucide-react";
import LayoutStructure from "./LayoutStructure";

const Features = () => {
  return (
    <section className="my-8 lg:my-14">
      <LayoutStructure>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div>
              <Clock className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              10 minute grocery now
            </h3>
            <p className="text-gray-600">
              Get your order delivered to your doorstep at the earliest from
              FreshCart pickup stores near you.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <Gift className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Best Prices & Offers
            </h3>
            <p className="text-gray-600">
              Cheaper prices than your local supermarket, great cashback offers
              to top it off. Get best prices & offers.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <Package className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Wide Assortment
            </h3>
            <p className="text-gray-600">
              Choose from 5000+ products across food, personal care, household,
              bakery, veg and non-veg & other categories.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <RefreshCcw className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Easy Returns
            </h3>
            <p className="text-gray-600">
              Not satisfied with a product? Return it at the doorstep & get a
              refund within hours. No questions asked{" "}
              <a
                href="#!"
                className="text-green-600 underline hover:text-green-800">
                policy
              </a>
              .
            </p>
          </div>
        </div>
      </LayoutStructure>
    </section>
  );
};

export default Features;
