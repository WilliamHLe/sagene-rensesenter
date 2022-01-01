import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const Tjenestevilkaar = () => {
  return (
    <Layout>
      <Container>
        <TitleWrapper>
          <Title>Tjenestevilkår og betingelser</Title>
        </TitleWrapper>

        <Sections>
          <SectionItem>
            <SectionTitle>1. Definisjon av parter</SectionTitle>
            <SectionText>
              Selger er Sagene Rensesenter. Kjøper er den fysisk eller juridisk
              person som er oppgitt som kjøper i bestillingsbekreftelsen, og
              blir i det følgende benevnt som «kunde».
            </SectionText>
          </SectionItem>
          <SectionItem>
            <SectionTitle>2 Merking av artikler</SectionTitle>
            <SectionText>
              Alle plagg som kommer inn til Sagene Rensesenter vil bli merket
              med en tag eller strekkode. Kunden godkjenner at renseriet gjør
              dette på samtlige artikler som leveres til behandling. Renseri.no
              plikter seg til å feste merkene på en diskre og flatterende måte.
              De blir festet på innsiden av søm, på vaskehenvisningslapp, på
              innsiden av lommer osv. Alle merker kan også fjernes i etterkant,
              men må gjøres av Sagene Rensesenter på en korrekt og skånsom måte.
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
              Sagene Rensesenter - Butikker plikter seg til å levere produkter
              og tjenester til avtalt tid. Ved forsinkelse skal kjøper bli
              varslet innen rimelig tid. Kjøper plikter seg til å oppgi
              nødvendig informasjon om artiklene som er nødvendig for en
              fagmessig behandling. Ved manglende informasjon om flekker, søm,
              elde eller andre tilsvarende forhold som resulterer i
              forsinkelser, har Sagene Rensesenter - Butikker retten til å endre
              avtalt leveringstid. Forsinkelser som forekommer grunnet tyveri,
              brann, ekstremvær eller andre eksterne faktorer som Sagene
              Rensesenter - Butikker ikke kan påvirke, står ikke Sagene
              Rensesenter - Butikker økonomisk ansvarlig.
            </SectionText>
          </SectionItem>
          <SectionItem>
            <SectionTitle>5.0 Uavhentede bestillinger</SectionTitle>
            <SectionText>
              Sagene Rensesenter - Butikker plikter seg til å ta vare på
              uavhentede bestillinger opptil 3 måned etter avtalt leveringstid.
              Etter 3 måneder vil artiklene bli donert bort til lokale
              veldedighetsorganisasjoner. Vi plikter oss å gi 3 påminnelser på å
              hente uavhentede bestillinger i perioden etter avtalt
              leveringstid. Kontaktpunktene blir gjort via telefon, sms eller
              e-post.
            </SectionText>
          </SectionItem>
          <SectionItem>
            <SectionTitle>6 Reklamasjon</SectionTitle>
            <SectionText>
              Sagene Rensesenter - Butikker forholder seg til
              Forbrukerkjøpsloven av 21. Juni Nr. 34 2002 for generelle regler
              rundt reklamasjon. Våre garantier innebærer ingen begrensninger i
              reklamasjonsfristen for varer etter Forbrukerkjøpsloven. Vi
              forholder oss etter Norsk Renseri- og Vaskeriforening (NRV) sin
              anbefalte erstatningstabell. Mer informasjon om NRV og komplett
              erstatningstabell finnes her:
              https://www.norskindustri.no/bransjer/renseri-og-vaskeri/nrvs-anbefalte-erstatningstabell/
              Sagene Rensesenter - Butikker har ikke ansvar for skader eller tap
              som skyldes: Limte kanter Utrakning i stoffer eller sømmer
              Slitasje og elde Knapper, perler, spenner, glidelåser Feilmerking,
              dvs. tøy som ikke tåler den type behandling de av produsenter er
              merket for Brann, tyveri eller andre forhold som ligger utenfor
              vår kontroll Andre særlige forhold som gjør det spesielt utsatt
              for skader
            </SectionText>
          </SectionItem>
        </Sections>
      </Container>
    </Layout>
  );
};

export default Tjenestevilkaar;

const Container = styled.div``;
const TitleWrapper = styled.div`
  background-color: #4f98f9;
  height: 8vh;
  width: 100%;
  display: flex;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 20px;
  padding-left: 2rem;
`;
const Sections = styled.div`
  margin: 10px;

  @media screen and (min-width: 768px) {
    margin: 20px 60px;
  }
`;
const SectionItem = styled.div`
  margin: 15px 0;
`;
const SectionTitle = styled.h2`
  font-size: 18px;
`;
const SectionText = styled.p`
  line-height: 1.3;
`;
