import React, { useEffect, useState } from "react";
import CatalogCard from "./CatalogCard";
import { getCatalog_API } from "../service/index";


const Solutions = () => {
         const [catalog, setCatalog] = useState([]);
      
         useEffect(() => {
            fetchCatalog();
         }, []);
      
         const fetchCatalog = async () => {
            const [error, response] = await getCatalog_API();
               console.log('response', response.data);
               
            if (error) {
               console.error("Xatolik:", error);
               return;
            }
            setCatalog(response.data);
         };
	return (
		<div className="mt-4">
			<h2 className="text-[140px] max-md:text-[100px] max-sm:text-[70px] font-inter-600 text-center">Решения</h2>
			<p className="text-center -mt-4 max-sm:mt-0 text-gray/60">
				Готовые роботизированные <br /> ячейки под разные задачи{" "}
			</p>
			<section className="py-20" id="projects">
				<div className="container1 mx-auto">
					<div className="grid lg:grid-cols-2 gap-2">
						{catalog.map((project, index) => (
							<CatalogCard key={index} project={project} index={index} />
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Solutions;
