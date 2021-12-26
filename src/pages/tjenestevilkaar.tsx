import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const Tjenestevilkaar = () => {
  return (
    <Layout>
      <Container>
        <Title>Tjenestevilkår og betingelser</Title>
        <Sections>
          <SectionItem>
            <SectionTitle>1. Definisjon av parter</SectionTitle>
            <SectionText>
              Selger er Pickup Laundry Mendivil, org. nr. 923 052 569, og blir i
              det følgende benevnt som «Pickup Renseri». Kjøper er den fysisk
              eller juridisk person som er oppgitt som kjøper i
              bestillingsbekreftelsen, og blir i det følgende benevnt som
              «kunde».
            </SectionText>
          </SectionItem>
          <SectionItem>
            <SectionTitle>2 Merking av artikler</SectionTitle>
            <SectionText>
              Alle plagg som kommer inn til Marthes Renseri vil bli merket med
              en tag eller strekkode. Kunden godkjenner at renseriet gjør dette
              på samtlige artikler som leveres til behandling. Renseri.no
              plikter seg til å feste merkene på en diskre og flatterende måte.
              De blir festet på innsiden av søm, på vaskehenvisningslapp, på
              innsiden av lommer osv. Alle merker kan også fjernes i etterkant,
              men må gjøres av renseri.no på en korrekt og skånsom måte.
              Forsøker du å fjerne merket selv, overtar renseri.no ingen ansvar
              for skadene dette kan medføre
            </SectionText>
          </SectionItem>
          <SectionItem>
            <SectionTitle>3 Priser og betaling</SectionTitle>
            <SectionText>
              <p>
                Alle priser er oppgitt inkludert merverdiavgift med mindre annet
                uttrykkelig er nevnt. Den totale kjøpesummen inkluderer alle
                kostnader forbundet med kjøpet.{" "}
              </p>
              Priser er oppgitt på www.renseri.no/priser og i alle avdelinger.
              Priser vil alltid blir oppgitt ved forespørsel. Ved eventuelle
              prisendringer vil det blir varslet i avdelingene. Dersom du har
              abonnementstjenester som er forskuddsbetalt, vil din kreditt bli
              justert tilsvarende med prisendringene. Betaling gjennomføres
              lokalt på avdelingen hvor kjøp gjøres. Alle avdelinger har
              følgende betalingsløsninger: Debet- og kredittkort VIPPS Faktura
              Kontant Ved valg av faktura må kjøper oppgi e-post, postadresse og
              fullt navn. Fra faktureringsdato påløper 10 dagers forfall hvor
              renter og gebyrer vil påløpe ved forsinket betaling.
            </SectionText>
          </SectionItem>
          <SectionItem>
            <SectionTitle>4 Levering og forsinkelse</SectionTitle>
            <SectionText>
              Renseri.no - Butikker plikter seg til å levere produkter og
              tjenester til avtalt tid. Ved forsinkelse skal kjøper bli varslet
              innen rimelig tid. Kjøper plikter seg til å oppgi nødvendig
              informasjon om artiklene som er nødvendig for en fagmessig
              behandling. Ved manglende informasjon om flekker, søm, elde eller
              andre tilsvarende forhold som resulterer i forsinkelser, har
              Renseri.no - Butikker retten til å endre avtalt leveringstid.
              Forsinkelser som forekommer grunnet tyveri, brann, ekstremvær
              eller andre eksterne faktorer som Renseri.no - Butikker ikke kan
              påvirke, står ikke Renseri.no - Butikker økonomisk ansvarlig.
            </SectionText>
          </SectionItem>
          <SectionItem>
            <SectionTitle>5.0 Uavhentede bestillinger</SectionTitle>
            <SectionText>Renseri.no - Butikker plikter seg til å ta vare på uavhentede bestillinger opptil 3 måned etter avtalt leveringstid. Etter 3 måneder vil artiklene bli donert bort til lokale veldedighetsorganisasjoner.


              Vi plikter oss å gi 3 påminnelser på å hente uavhentede bestillinger i perioden etter avtalt leveringstid. Kontaktpunktene blir gjort via telefon, sms eller e-post.</SectionText>
          </SectionItem>
          <SectionItem>
            <SectionTitle>6 Reklamasjon</SectionTitle>
            <SectionText>Renseri.no - Butikker forholder seg til Forbrukerkjøpsloven av 21. Juni Nr. 34 2002 for generelle regler rundt reklamasjon. Våre garantier innebærer ingen begrensninger i reklamasjonsfristen for varer etter Forbrukerkjøpsloven.

              Vi forholder oss etter Norsk Renseri- og Vaskeriforening (NRV) sin anbefalte erstatningstabell. Mer informasjon om NRV og komplett erstatningstabell finnes her: https://www.norskindustri.no/bransjer/renseri-og-vaskeri/nrvs-anbefalte-erstatningstabell/

              Renseri.no - Butikker har ikke ansvar for skader eller tap som skyldes:


              Limte kanter
              Utrakning i stoffer eller sømmer
              Slitasje og elde
              Knapper, perler, spenner, glidelåser
              Feilmerking, dvs. tøy som ikke tåler den type behandling de av produsenter er merket for
              Brann, tyveri eller andre forhold som ligger utenfor vår kontroll
              Andre særlige forhold som gjør det spesielt utsatt for skader
            </SectionText>
          </SectionItem>
          <SectionItem>
            <SectionTitle></SectionTitle>
            <SectionText></SectionText>
          </SectionItem>
          <SectionItem>
            <SectionTitle></SectionTitle>
            <SectionText></SectionText>
          </SectionItem>
          <SectionItem>
            <SectionTitle></SectionTitle>
            <SectionText></SectionText>
          </SectionItem>
        </Sections>
      </Container>
    </Layout>
  );
};

export default Tjenestevilkaar;

const Container = styled.div`
  margin: 30px;
`;
const Title = styled.h1``;
const Sections = styled.div``;
const SectionItem = styled.div``;
const SectionTitle = styled.h2``;
const SectionText = styled.p``;
