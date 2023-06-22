import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const client = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_S3_PHOTOS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_S3_PHOTOS_SECRET_ACCESS_KEY
    }
});

const generateSignedUrl = async (Bucket, Key, Expires = 60 * 60 * 3) => {
    try {
        const command = new GetObjectCommand({
            Bucket,
            Key,
            ResponseContentType: "application/octet-stream"
        });

        const url = await getSignedUrl(client, command, { expiresIn: Expires });
        return url;
    } catch (err) {
        console.error(err);
        throw err;
    };
};

export default generateSignedUrl;