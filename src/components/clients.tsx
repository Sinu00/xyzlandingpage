'use client'

export default function Clients() {
  const clients = [
    { name: "Saudi Aramco", logo: "/clients/aramco.png" },
    { name: "SABIC", logo: "/clients/sabic.png" },
    { name: "Ma'aden", logo: "/clients/maaden.png" },
    { name: "SWCC", logo: "/clients/swcc.png" },
    { name: "KFUPM", logo: "/clients/kfupm.png" },
    { name: "Royal Commission", logo: "/clients/royal-commission.png" },
    { name: "NEOM", logo: "/clients/neom.png" },
    { name: "Red Sea Global", logo: "/clients/red-sea.png" },
    { name: "PIF", logo: "/clients/pif.png" },
    { name: "ACWA Power", logo: "/clients/acwa.png" },
    { name: "SEC", logo: "/clients/sec.png" },
    { name: "STC", logo: "/clients/stc.png" },
  ]

  // Split clients into two rows
  const firstRow = clients.slice(0, 6)
  const secondRow = clients.slice(6, 12)

  // Create multiple copies for seamless infinite scroll
  const infiniteFirstRow = [...firstRow, ...firstRow, ...firstRow]
  const infiniteSecondRow = [...secondRow, ...secondRow, ...secondRow]

  return (
    <>
      <style dangerouslySetInnerHTML={{ 
        __html: `
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }
          
          @keyframes scroll-right {
            0% {
              transform: translateX(-33.333%);
            }
            100% {
              transform: translateX(0);
            }
          }
        ` 
      }} />
      
      <section id="clients" className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by <span className="text-red-500">Industry Leaders</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are proud to serve some of the most prestigious organizations in Saudi Arabia and the region
            </p>
          </div>

          <div className="relative">
            {/* First row - moving left */}
            <div className="flex overflow-hidden mb-8">
              <div 
                className="flex"
                style={{
                  animation: 'scroll-left 15s linear infinite',
                  width: 'max-content'
                }}
              >
                {infiniteFirstRow.map((client, index) => (
                  <div
                    key={`first-${index}`}
                    className="group flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-200 w-[200px] mx-4 flex-shrink-0"
                  >
                    <div className="relative w-full h-16 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-400 group-hover:text-red-500 transition-colors duration-300">
                          {client.name}
                        </div>
                        <div className="text-xs text-gray-300 group-hover:text-gray-600 transition-colors duration-300 mt-1">
                          Trusted Partner
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Second row - moving right */}
            <div className="flex overflow-hidden">
              <div 
                className="flex"
                style={{
                  animation: 'scroll-right 15s linear infinite',
                  width: 'max-content'
                }}
              >
                {infiniteSecondRow.map((client, index) => (
                  <div
                    key={`second-${index}`}
                    className="group flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-200 w-[200px] mx-4 flex-shrink-0"
                  >
                    <div className="relative w-full h-16 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-400 group-hover:text-red-500 transition-colors duration-300">
                          {client.name}
                        </div>
                        <div className="text-xs text-gray-300 group-hover:text-gray-600 transition-colors duration-300 mt-1">
                          Trusted Partner
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gray-50 rounded-full">
              <span className="text-gray-600 font-medium">
                Join 100+ satisfied clients who trust our services
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 