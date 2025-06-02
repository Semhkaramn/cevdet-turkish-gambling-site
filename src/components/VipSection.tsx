import type { Category, Site } from '@/types';

interface VipSectionProps {
  category: Category;
  sites: Site[];
  findSite: (siteName: string) => Site | undefined;
}

export default function VipSection({ category, sites, findSite }: VipSectionProps) {
  const sortedSites = category.sites
    .map(categorySite => findSite(categorySite.site))
    .filter((site): site is Site => site !== undefined)
    .sort((a, b) => {
      const aSort = category.sites.find(cs => cs.site === a.site)?.sort || '0';
      const bSort = category.sites.find(cs => cs.site === b.site)?.sort || '0';
      return Number.parseInt(aSort) - Number.parseInt(bSort);
    });

  if (sortedSites.length === 0) {
    return null;
  }

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-yellow-400 mb-2">
            ⭐ VIP SİTELER
          </h2>
          <p className="text-gray-300">Özel avantajlarla en seçkin siteler</p>
        </div>
        
        <div className={`grid gap-6 ${category.grid === 1 ? 'grid-cols-1' : category.grid === 2 ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
          {sortedSites.map((site) => (
            <div
              key={site.site}
              className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-lg p-6 border border-purple-500/30 hover:border-yellow-400/50 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-2 right-2">
                <span className="bg-yellow-400 text-black px-2 py-1 rounded text-xs font-bold">
                  VIP
                </span>
              </div>
              
              <div className="flex items-center mb-4">
                <img
                  src={`${sites[0]?.url || ''}/logo.png`}
                  alt={site.site}
                  className="w-12 h-12 rounded-lg mr-4"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=100&h=100&fit=crop&crop=center';
                  }}
                />
                <div>
                  <h3 className="text-xl font-bold text-white">{site.site}</h3>
                  <p className="text-gray-400 text-sm">{site.desc[0]}</p>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="text-center">
                  <span className="text-yellow-400 font-bold text-lg">{site.desc[1]}</span>
                </div>
              </div>
              
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-3 px-4 rounded-lg text-center hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105"
              >
                Hemen Oyna
              </a>
              
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 -translate-x-full group-hover:translate-x-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}