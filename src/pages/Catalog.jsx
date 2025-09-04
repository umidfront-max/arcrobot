import React, { useEffect, useState } from "react";
import CatalogCard from "../components/CatalogCard";
import { getCatalog_API } from "../service/index";

function Catalog() {
      const [catalog, setCatalog] = useState([]);
   
      useEffect(() => {
         fetchCatalog();
      }, []);
   
      const fetchCatalog = async () => {
         const [error, response] = await getCatalog_API();
         if (error) {
            console.error("Xatolik:", error);
            return;
         }
         setCatalog(response.data);
      };
   
	return (
		<div className="py-16 pt-32 max-xl:pt-24 container1">
			<div className="grid grid-cols-2 max-xl:grid-cols-1 items-center gap-1 ">
				<p className="text-[144px] max-xl:text-[100px] max-sm:text-[60px] max-sm:leading-[70px] leading-10 max-xl:leading-[100px] font-inter-600">
					Каталог
				</p>
				<div className="w-full max-w-[400px] mt-2 max-sm:mt-0">
					<p>Сварочные роботы в готовых конфигурациях.</p>
					<p className="text-black/60 mt-3">
						Каталог ячеек — от компактных решений до полноценных
						автоматизированных постов.
					</p>
				</div>
         </div>
			<div className="grid md:grid-cols-2 gap-2 mt-24 max-xl:mt-16 max-md:mt-8">
				{catalog.map((project, index) => (
					<CatalogCard key={index} project={project} index={index} />
				))}
			</div>
		</div>
	);
}

export default Catalog;
