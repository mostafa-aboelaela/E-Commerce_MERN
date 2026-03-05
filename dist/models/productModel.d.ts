import mongoose, { Document } from 'mongoose';
export interface IProduct extends Document {
    title: string;
    price: number;
    stock: number;
    image: string;
}
declare const productModel: mongoose.Model<IProduct, {}, {}, {}, mongoose.Document<unknown, {}, IProduct, {}, mongoose.DefaultSchemaOptions> & IProduct & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IProduct>;
export default productModel;
//# sourceMappingURL=productModel.d.ts.map