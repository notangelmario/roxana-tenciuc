import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export default function LandingDetails() {
	return (
		<Accordion type="multiple">
			<AccordionItem value="1">
				<AccordionTrigger>Siguranță pentru noi toți</AccordionTrigger>
				<AccordionContent>
					<ul>
						<li>Şanțuri acoperite pe strada Legumelor şi Muncii, un prim pas pentru străzi mai sigure</li>
						<li>Limitatoare pe străzile comunale - proiect implementat greşit, fără respectarea indicatorilor;</li>
						<li>Stâlpișori reflectorizanti pe marginea drumului Județean, pentru siguranța pietonilor;</li>
						<li>Fără gunoi lângă casă - 3700 semnături în 10 zile, un proces colectiv şi o hotărâre de Consiliu Județean anulată, împreună;</li>
						<li>Campanii de sterilizări cu sprijinul asociațiilor de profil, dar şi cu sprijinul consiliului local.</li>
					</ul>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="2">
				<AccordionTrigger>Alături de cetățeni</AccordionTrigger>
				<AccordionContent>
					<ul>
						<li>Sprijin oferit cetățenilor pentru contestarea abuzului făcut de primărie prin solicitarea taxei de salubritate pe ultimii 5 ani, la care adaugă şi penalități;</li>
						<li>Petiție şi solicitări la Apa Canal Ilfov pentru reducerea prețului la apă şi canalizare, am scăzut de la 17 la 13lei;</li>
						<li>Am informat oamenii despre Drumul Radial 1 ,despre stabilirea traseului şi despre paşii următori;</li>
						<li>Gratuitate pe transportul public pentru pensionari;</li>
						<li>Transmiterea live a şedintelor de consiliu, proiect aprobat, neimplementat de primar;</li>
						<li>Centrală şi calorifere la Dispensarul Ciorogârla;</li>
					</ul>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="3">
				<AccordionTrigger>Copiii sunt viitorul</AccordionTrigger>
				<AccordionContent>
					<ul>
						<li>Primul festival pentru copiii din Ciorogârla şi Dârvari</li>
						<li>Am deschis locurile dejoacă în pandemie</li>
						<li>Am amenajat locul dejoaca de la Gradinița Ciorogârla şi am reparat parcul de la Şcoală</li>
						<li>Sprijin pentru învațământul Dual la Liceul Pamfil Şeicaru, prin punerea pe ordinea de zi a solicitării de la mediul de afaceri</li>
					</ul>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}
