// src/data/cityData.js
// Updated for your ACTUAL coverage cities: Atlanta, Savannah, Augusta, Athens, and Marietta

export const cityData = {
    atlanta: {
      name: "Atlanta",
      slug: "atlanta",
      title: "Atlanta Traffic Camera Footage & Video Evidence | Argus AI Georgia",
      heroTitle: "Atlanta Traffic Camera Footage & Video Evidence",
      heroDescription: "Professional traffic camera footage retrieval for Atlanta personal injury attorneys. 24/7 access to I-75, I-85, I-20, I-285 camera networks. Court-ready evidence packages from Georgia's largest metro area.",
      description: "Professional traffic camera footage retrieval for Atlanta personal injury attorneys. 24/7 access to I-75, I-85, I-20, I-285 camera networks. Court-ready evidence packages from Georgia's largest metro area.",
      keywords: "Atlanta traffic camera footage, video evidence Atlanta GA, personal injury lawyers Atlanta, I-285 accident footage, I-75 camera video, Atlanta car accident evidence, downtown Atlanta traffic cameras",
      coordinates: "33.7490, -84.3880",
      population: "510,823", // 2024 census data
      metroPopulation: "6.2 million", // Metro Atlanta
      countyName: "Fulton County",
      stats: [
        { number: "2,400+", label: "Traffic Cameras" },
        { number: "24/7", label: "Evidence Access" },
        { number: "2hrs", label: "Average Response" }
      ],
      coverageAreas: [
        {
          title: "I-285 Perimeter & Downtown",
          description: "Comprehensive coverage of the I-285 perimeter highway system, downtown Atlanta intersections, and major business district camera networks including Peachtree Street corridors."
        },
        {
          title: "Interstate Convergence Hub",
          description: "Complete I-75, I-85, I-20 interstate system coverage including the downtown connector, major interchanges, and high-traffic merger zones throughout metro Atlanta."
        },
        {
          title: "Suburban Metro Corridors",
          description: "Buckhead, Midtown, Virginia-Highland, and suburban arterial road monitoring including GA-400, major shopping centers, and residential access points."
        }
      ],
      keyHighways: "I-75, I-85, I-20, I-285 Perimeter, GA-400, I-575, Downtown Connector",
      specialFeatures: "Hartsfield-Jackson Airport traffic, Mercedes-Benz Stadium area, State Capitol district",
      caseTypes: "High-volume metro accidents, interstate pile-ups, downtown pedestrian incidents, commercial vehicle accidents"
    },
  
    savannah: {
      name: "Savannah",
      slug: "savannah",
      title: "Savannah Traffic Camera Footage & Video Evidence | Argus AI Georgia",
      heroTitle: "Savannah Traffic Camera Footage & Video Evidence",
      heroDescription: "Professional traffic camera footage retrieval for Savannah personal injury attorneys. Historic district, I-95, I-16 corridor coverage. Port traffic and coastal highway evidence collection.",
      description: "Professional traffic camera footage retrieval for Savannah personal injury attorneys. Historic district, I-95, I-16 corridor coverage. Port traffic and coastal highway evidence collection.",
      keywords: "Savannah traffic camera footage, video evidence Savannah GA, personal injury lawyers Savannah, I-95 accident footage, historic district cameras, Savannah car accident evidence, port traffic cameras",
      coordinates: "32.0835, -81.0998",
      population: "147,748", // 2024 census data
      metroPopulation: "404,798", // Savannah metro
      countyName: "Chatham County",
      stats: [
        { number: "450+", label: "Traffic Cameras" },
        { number: "24/7", label: "Evidence Access" },
        { number: "2-3hrs", label: "Average Response" }
      ],
      coverageAreas: [
        {
          title: "Historic District & Downtown",
          description: "Complete coverage of Savannah's historic 24-square district including Bull Street, Abercorn Street, and major square intersections with specialized heritage-compliant cameras."
        },
        {
          title: "I-95 & I-16 Corridor",
          description: "Major interstate coverage including the I-95/I-16 interchange, US-80 to Tybee Island, and high-traffic tourist route monitoring for coastal access."
        },
        {
          title: "Port & Industrial Traffic",
          description: "Port of Savannah access roads, industrial corridor monitoring, and heavy truck traffic documentation along major freight transportation routes."
        }
      ],
      keyHighways: "I-95, I-16, US-80, Abercorn Street, Victory Drive, DeRenne Avenue",
      specialFeatures: "Port of Savannah traffic, Tybee Island connector, SCAD campus areas, historic trolley routes",
      caseTypes: "Tourist pedestrian accidents, port truck incidents, historic district collisions, coastal highway crashes"
    },
  
    augusta: {
      name: "Augusta",
      slug: "augusta",
      title: "Augusta Traffic Camera Footage & Video Evidence | Argus AI Georgia",
      heroTitle: "Augusta Traffic Camera Footage & Video Evidence",
      heroDescription: "Professional traffic camera footage retrieval for Augusta personal injury attorneys. I-20, I-520 loop, Richmond County camera networks. Medical district and Masters tournament area coverage.",
      description: "Professional traffic camera footage retrieval for Augusta personal injury attorneys. I-20, I-520 loop, Richmond County camera networks. Medical district and Masters tournament area coverage.",
      keywords: "Augusta traffic camera footage, video evidence Augusta GA, personal injury lawyers Augusta, I-20 accident footage, Richmond County cameras, Augusta car accident evidence, medical district traffic",
      coordinates: "33.4735, -82.0105",
      population: "206,153", // 2024 census data - Augusta-Richmond County consolidated
      metroPopulation: "611,000", // Augusta metro area
      countyName: "Richmond County",
      stats: [
        { number: "350+", label: "Traffic Cameras" },
        { number: "24/7", label: "Evidence Access" },
        { number: "2-3hrs", label: "Average Response" }
      ],
      coverageAreas: [
        {
          title: "I-20 Corridor & I-520 Loop",
          description: "Complete interstate and loop system coverage including major exits, the Bobby Jones Expressway (I-520), and cross-state traffic monitoring through the CSRA region."
        },
        {
          title: "Medical District & Downtown",
          description: "Augusta University Medical Center area, downtown business district, and government complex intersections with specialized emergency vehicle priority monitoring."
        },
        {
          title: "Washington Road Corridor",
          description: "Major commercial thoroughfare coverage including shopping centers, medical facilities, and high-traffic retail areas throughout Richmond County."
        }
      ],
      keyHighways: "I-20, I-520 (Bobby Jones Expressway), US-1, Washington Road, Gordon Highway, Wrightsboro Road",
      specialFeatures: "Augusta National Golf Club area (Masters), Fort Eisenhower vicinity, Medical District priority",
      caseTypes: "Interstate corridor accidents, medical emergency route incidents, Masters tournament traffic, military installation access"
    },
  
    athens: {
      name: "Athens",
      slug: "athens",
      title: "Athens Traffic Camera Footage & Video Evidence | Argus AI Georgia",
      heroTitle: "Athens Traffic Camera Footage & Video Evidence",
      heroDescription: "Professional traffic camera footage retrieval for Athens personal injury attorneys. University of Georgia campus area, Loop 10 perimeter, US-441 corridor coverage for Clarke County cases.",
      description: "Professional traffic camera footage retrieval for Athens personal injury attorneys. University of Georgia campus area, Loop 10 perimeter, US-441 corridor coverage for Clarke County cases.",
      keywords: "Athens traffic camera footage, video evidence Athens GA, personal injury lawyers Athens, UGA campus accidents, Loop 10 cameras, Athens car accident evidence, university traffic patterns",
      coordinates: "33.9519, -83.3576",
      population: "128,864", // 2024 census data
      metroPopulation: "215,479", // Athens-Clarke County metro
      countyName: "Clarke County",
      stats: [
        { number: "200+", label: "Traffic Cameras" },
        { number: "24/7", label: "Evidence Access" },
        { number: "2-3hrs", label: "Average Response" }
      ],
      coverageAreas: [
        {
          title: "University of Georgia Campus",
          description: "Comprehensive campus perimeter monitoring including game day traffic patterns, student pedestrian areas, and major university access points along Milledge Avenue and Broad Street."
        },
        {
          title: "Loop 10 (Athens Perimeter)",
          description: "Complete coverage of the 19-mile Athens Perimeter including US-29, US-78, US-441, and US-129 concurrencies with major interchange documentation."
        },
        {
          title: "Downtown & Commercial Districts",
          description: "Historic downtown Athens, Five Points intersection, major commercial corridors including Atlanta Highway and Prince Avenue traffic monitoring."
        }
      ],
      keyHighways: "Loop 10 (Athens Perimeter), US-441, US-78, US-29, US-129, Atlanta Highway, Prince Avenue",
      specialFeatures: "UGA football game day traffic, student pedestrian zones, historic downtown, Five Points intersection",
      caseTypes: "University pedestrian accidents, game day traffic incidents, student housing area collisions, downtown intersection crashes"
    },
  
    marietta: {
      name: "Marietta",
      slug: "marietta",
      title: "Marietta Traffic Camera Footage & Video Evidence | Argus AI Georgia",
      heroTitle: "Marietta Traffic Camera Footage & Video Evidence",
      heroDescription: "Professional traffic camera footage retrieval for Marietta personal injury attorneys. I-75, Cobb Parkway (US-41), I-575 coverage. Cobb County camera networks and suburban corridor monitoring.",
      description: "Professional traffic camera footage retrieval for Marietta personal injury attorneys. I-75, Cobb Parkway (US-41), I-575 coverage. Cobb County camera networks and suburban corridor monitoring.",
      keywords: "Marietta traffic camera footage, video evidence Marietta GA, personal injury lawyers Marietta, I-75 accident footage, Cobb Parkway cameras, Marietta car accident evidence, Cobb County traffic",
      coordinates: "33.9526, -84.5499",
      population: "61,387", // 2024 census data
      metroPopulation: "760,000", // Cobb County
      countyName: "Cobb County",
      stats: [
        { number: "300+", label: "Traffic Cameras" },
        { number: "24/7", label: "Evidence Access" },
        { number: "2hrs", label: "Average Response" }
      ],
      coverageAreas: [
        {
          title: "I-75 & I-575 Corridors",
          description: "Major interstate coverage through Cobb County including the I-75/I-575 split, Barrett Parkway interchange, and high-traffic suburban commuter routes."
        },
        {
          title: "Cobb Parkway (US-41)",
          description: "Complete north-south arterial monitoring from Kennesaw through Marietta including major shopping centers, business districts, and residential access points."
        },
        {
          title: "Historic Marietta Square",
          description: "Downtown Marietta square area, courthouse vicinity, and surrounding commercial district intersections with historic preservation considerations."
        }
      ],
      keyHighways: "I-75, I-575, US-41 (Cobb Parkway), Barrett Parkway, Roswell Road, Powder Springs Road",
      specialFeatures: "Marietta Square historic district, Life University area, Dobbins Air Reserve Base vicinity, major shopping corridors",
      caseTypes: "Suburban intersection accidents, interstate merge incidents, shopping center collisions, residential area crashes"
    }
  };
  
  // Helper function to get city data by slug
  export const getCityData = (slug) => {
    return cityData[slug] || null;
  };
  
  // Get all cities for sitemap generation and navigation
  export const getAllCities = () => {
    return Object.values(cityData);
  };
  
  // Get city names for quick reference
  export const getCityNames = () => {
    return Object.keys(cityData);
  };