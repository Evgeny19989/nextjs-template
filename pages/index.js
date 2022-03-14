import cl from "clsx";
import {MainLayout} from "../components/MainLayout";

export default function Home() {

    let SEO = {
        title: 'Test',
        description: 'Test',
        keys: 'Test',
        og_title: 'Test',
        og_description: 'Test'
    }

    return (
        <MainLayout {...SEO}>
            <section className='container'>


                <div className={cl()}>
                    <h1>
                        Hello world
                    </h1>
                </div>
            </section>

        </MainLayout>
    )
}


/*
export async function getStaticProps(context) {

    const uuid = context.params.uuid;
    const flatData = await axios.get(`https://trad-immobilien.vercel.app/api/estate/${uuid}`)
    const data = flatData.data.entries[0];

    return {
        props: {data},
        revalidate: 60,
    };
}

export async function getStaticPaths(context) {

    const flatsData = await axios.get(`https://trad-immobilien.vercel.app/api/estate`)
    const data = flatsData.data.entries;
    const paths = data.map((el) => {
        const uuid = el.id;
        return {
            params: {
                uuid,
            },
        };
    });

    return {paths, fallback: false};

}
*/
