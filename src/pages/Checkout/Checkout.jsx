import { useFormik } from "formik";
import * as Yup from "yup";
import { useFav } from "../../context/useFav";
import { Phone, User } from "lucide-react";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useFav();
  const cartItemsArray = Object.values(cartItems);
  const total = cartItemsArray.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Enter First Name"),
    lastName: Yup.string().required("Enter Last Name"),
    city: Yup.string().required("Enter City"),
    district: Yup.string().required("Enter District"),
    street: Yup.string().required("Enter Street Name"),
    buildingNumber: Yup.number().required("Enter Building Number"),
    floor: Yup.number().required("Enter Floor Number"),
    apartment: Yup.number().required("Enter Apartment Number"),
    cardNumber: Yup.string()
      .min(16)
      .max(16)
      .required("Enter a Valid Card Number"),
    cvv: Yup.string().min(3).max(3).required("Enter CVV"),
    phone: Yup.string()
      .matches(/^01[0125][0-9]{8}$/, "Enter a Valid Egyptian Number")
      .required("Phone is Required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      city: "",
      district: "",
      street: "",
      buildingNumber: "",
      floor: "",
      apartment: "",
      cardNumber: "",
      cvv: "",
      phone: "",
    },
    validationSchema,
    onSubmit: () => {
      toast.success("Order Submitted Successfully");
      clearCart();
      formik.resetForm();
      navigate("/cart");
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
      <div className="w-full md:w-[75%] mx-auto px-4 sm:px-6 ">
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900">
            Checkout Page
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Total Cart Items : {cartItemsArray.length}
          </h2>
        </div>

        <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
          <form
            onSubmit={formik.handleSubmit}
            className="space-y-6 w-full flex flex-column md:flex-row flex-wrap justify-between items-center gap-x-6"
          >
            <div className="w-full md:w-[48%]">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                <input
                  name="firstName"
                  value={formik.values.firstName}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  className={`block w-full pl-10 pr-3 py-3 border rounded-xl ${
                    formik.touched.firstName && formik.errors.firstName
                      ? "border-red-300"
                      : "border-gray-300"
                  }`}
                  placeholder="Enter First Name"
                />
              </div>
              {formik.touched.firstName && formik.errors.firstName && (
                <p className="text-sm text-red-600">
                  {formik.errors.firstName}
                </p>
              )}
            </div>

            <div className="w-full md:w-[48%]">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                <input
                  name="lastName"
                  value={formik.values.lastName}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  className={`block w-full pl-10 pr-3 py-3 border rounded-xl ${
                    formik.touched.lastName && formik.errors.lastName
                      ? "border-red-300"
                      : "border-gray-300"
                  }`}
                  placeholder="Enter Last Name"
                />
              </div>
              {formik.touched.lastName && formik.errors.lastName && (
                <p className="text-sm text-red-600">{formik.errors.lastName}</p>
              )}
            </div>

            <div className="w-full md:w-[30%]">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                <input
                  name="phone"
                  value={formik.values.phone}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="tel"
                  className={`block w-full pl-10 pr-3 py-3 border rounded-xl ${
                    formik.touched.phone && formik.errors.phone
                      ? "border-red-300"
                      : "border-gray-300"
                  }`}
                  placeholder="Enter phone"
                />
              </div>
              {formik.touched.phone && formik.errors.phone && (
                <p className="text-sm text-red-600">{formik.errors.phone}</p>
              )}
            </div>

            <div className="w-full md:w-[30%]">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Card Number
              </label>
              <input
                name="cardNumber"
                value={formik.values.cardNumber}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="tel"
                className={`block w-full pl-3 pr-3 py-3 border rounded-xl ${
                  formik.touched.cardNumber && formik.errors.cardNumber
                    ? "border-red-300"
                    : "border-gray-300"
                }`}
                placeholder="Enter card number"
              />
              {formik.touched.cardNumber && formik.errors.cardNumber && (
                <p className="text-sm text-red-600">
                  {formik.errors.cardNumber}
                </p>
              )}
            </div>

            <div className="w-full md:w-[30%]">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                CVV
              </label>
              <input
                name="cvv"
                value={formik.values.cvv}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="tel"
                className={`block w-full pl-3 pr-3 py-3 border rounded-xl ${
                  formik.touched.cvv && formik.errors.cvv
                    ? "border-red-300"
                    : "border-gray-300"
                }`}
                placeholder="Enter CVV"
              />
              {formik.touched.cvv && formik.errors.cvv && (
                <p className="text-sm text-red-600">{formik.errors.cvv}</p>
              )}
            </div>

            <div className="w-full md:w-[30%]">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City
              </label>
              <input
                name="city"
                value={formik.values.city}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="text"
                className={`block w-full pl-3 pr-3 py-3 border rounded-xl ${
                  formik.touched.city && formik.errors.city
                    ? "border-red-300"
                    : "border-gray-300"
                }`}
                placeholder="City"
              />
              {formik.touched.city && formik.errors.city && (
                <p className="text-sm text-red-600">{formik.errors.city}</p>
              )}
            </div>

            <div className="w-full md:w-[30%]">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                District
              </label>
              <input
                name="district"
                value={formik.values.district}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="text"
                className={`block w-full pl-3 pr-3 py-3 border rounded-xl ${
                  formik.touched.district && formik.errors.district
                    ? "border-red-300"
                    : "border-gray-300"
                }`}
                placeholder="District"
              />
              {formik.touched.district && formik.errors.district && (
                <p className="text-sm text-red-600">{formik.errors.district}</p>
              )}
            </div>

            <div className="w-full md:w-[30%]">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Street Name
              </label>
              <input
                name="street"
                value={formik.values.street}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="text"
                className={`block w-full pl-3 pr-3 py-3 border rounded-xl ${
                  formik.touched.street && formik.errors.street
                    ? "border-red-300"
                    : "border-gray-300"
                }`}
                placeholder="Street"
              />
              {formik.touched.street && formik.errors.street && (
                <p className="text-sm text-red-600">{formik.errors.street}</p>
              )}
            </div>

            <div className="w-full md:w-[30%]">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Building Number
              </label>
              <input
                name="buildingNumber"
                value={formik.values.buildingNumber}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="number"
                className={`block w-full pl-3 pr-3 py-3 border rounded-xl ${
                  formik.touched.buildingNumber && formik.errors.buildingNumber
                    ? "border-red-300"
                    : "border-gray-300"
                }`}
                placeholder="Building Number"
              />
              {formik.touched.buildingNumber &&
                formik.errors.buildingNumber && (
                  <p className="text-sm text-red-600">
                    {formik.errors.buildingNumber}
                  </p>
                )}
            </div>

            <div className="w-full md:w-[30%]">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Floor
              </label>
              <input
                name="floor"
                value={formik.values.floor}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="number"
                className={`block w-full pl-3 pr-3 py-3 border rounded-xl ${
                  formik.touched.floor && formik.errors.floor
                    ? "border-red-300"
                    : "border-gray-300"
                }`}
                placeholder="Floor"
              />
              {formik.touched.floor && formik.errors.floor && (
                <p className="text-sm text-red-600">{formik.errors.floor}</p>
              )}
            </div>

            <div className="w-full md:w-[30%]">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Apartment
              </label>
              <input
                name="apartment"
                value={formik.values.apartment}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="number"
                className={`block w-full pl-3 pr-3 py-3 border rounded-xl ${
                  formik.touched.apartment && formik.errors.apartment
                    ? "border-red-300"
                    : "border-gray-300"
                }`}
                placeholder="Apartment"
              />
              {formik.touched.apartment && formik.errors.apartment && (
                <p className="text-sm text-red-600">
                  {formik.errors.apartment}
                </p>
              )}
            </div>

            <div className="flex flex-col justify-center items-center w-full">
              <h2 className="text-xl sm:text-2xl font-bold text-grey-900 mb-6 mt-6">
                Total : {total} EGP
              </h2>

              <div className="flex flex-row justify-center items-center w-full gap-x-8">
                <button
                  type="submit"
                  className="w-full md:w-[20%] bg-green-600 text-white py-3 px-4 rounded-xl hover:bg-green-700 transition font-medium"
                >
                  Submit Order
                </button>

                <Link
                  to="/cart"
                  className="w-full md:w-[20%] cursor-pointer border border-gray-300 text-gray-700 py-3 rounded-xl hover:bg-gray-50 transition-colors font-medium text-center block"
                >
                  <button type="button">Return To Cart</button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
