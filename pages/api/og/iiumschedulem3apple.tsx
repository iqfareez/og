// New IIUM Schedule version og image with material 3 design screenshot (v1.1+)

import {ImageResponse} from '@vercel/og';
import {NextRequest} from 'next/server';

export const config = {
    runtime: 'experimental-edge',
};

const font = fetch(new URL('../../../assets/fonts/DMSans-Bold.ttf', import.meta.url)).then(
    (res) => res.arrayBuffer(),
);

export default async function handler(req: NextRequest) {

    const {searchParams} = req.nextUrl;
    const version = searchParams.get('version');
    if (!version) {
        return new ImageResponse(<>Visit with &quot;?version=1.0.0&quot;</>, {
            width: 1200,
            height: 630,
        });
    }
    const fontData = await font;

    return new ImageResponse(
        (
            <div
                style={{
                    display: 'flex',
                    fontSize: 85,
                    fontFamily: 'DMSans-Bold',
                    color: 'black',
                    // background: '#f6f6f6',
                    width: '100%',
                    height: '100%',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <img
                    src={"https://res.cloudinary.com/iqfareez-cloud/image/upload/v1693114176/IIUM%20Schedule/iium-release-bg-apple_v1rikj.png"}
                    alt={"IIUM Schedule release background"}
                >
                    <p style={{position: "relative", left:"82px", top:"10px"}}>v{version}</p>
                </img>
            </div>
        ),
        {
            width: 1200,
            height: 628,
            fonts: [
                {
                    data: fontData,
                    name: 'DMSans-Bold',
                    style: 'normal',
                },
            ],
        },
    );
}
