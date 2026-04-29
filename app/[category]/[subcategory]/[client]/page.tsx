import { supabase } from '../../../../utils/supabase';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { category: string, subcategory: string, client: string } }) {
  const { data } = await supabase
    .from('articles')
    .select('title, business_name')
    .eq('client_slug', params.client)
    .single();

  if (!data) return { title: 'الصفحة غير موجودة | GeoRanker' };

  return {
    title: `${data.title} | ${data.business_name}`,
    description: `تعرف على أفضل الخدمات من ${data.business_name}.`,
  };
}

export default async function ClientPage({ params }: { params: { category: string, subcategory: string, client: string } }) {
  
  const { data: article, error } = await supabase
    .from('articles')
    .select('*')
    .eq('client_slug', params.client)
    .single();

  if (error || !article) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto p-8 font-sans">
      
      {article.seo_schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: article.seo_schema }}
        />
      )}

      <article className="prose lg:prose-xl mx-auto mt-10">
        <div className="text-xs text-gray-500 mb-4 uppercase tracking-widest bg-gray-100 p-2 rounded inline-block">
          {article.category_slug} / {article.subcategory_slug} / <span className="font-bold text-blue-700">{article.business_name}</span>
        </div>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 leading-tight">
          {article.title}
        </h1>
        
        <div 
          className="text-gray-800 leading-relaxed space-y-6"
          dangerouslySetInnerHTML={{ __html: article.content }} 
        />
      </article>
    </main>
  );
}