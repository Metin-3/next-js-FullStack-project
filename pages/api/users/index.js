import dbConnect from "../../../util/dbConnect";

const handler = async (req, res) => {
    await dbConnect();

    res.status(200).json({message: "Successfully"});
}

export default handler