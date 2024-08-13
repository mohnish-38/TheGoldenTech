"use client";
import {
    Button,
  Container,
  Grid,
  GridCol,
  Paper,
  px,
  rem,
  SimpleGrid,
  Skeleton,
  Stack,
  useMantineTheme,
} from "@mantine/core";
import Layout from "../../../components/AppLayout/Layout";
import { ProductCard } from "../../../components/Product/ProductCard/ProductCard";
import { ProductSpecsTable } from "../../../components/Product/ProductSpecs/ProductSpecsTable";
import { useDisclosure } from "@mantine/hooks";
import GetQuotationModal from "../../../components/Product/GetQuotation/GetQuotation";

const PRIMARY_COL_HEIGHT = rem(500);

const getChild = (height: number) => (
  <Skeleton height={height} radius="md" animate={false} />
);
const BASE_HEIGHT = 360;
const getSubHeight = (children: number, spacing: number) =>
  BASE_HEIGHT / children - spacing * ((children - 1) / children);

export default function Page({ params }: { params: { slug: string } }) {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Layout>
      <Container size="xl" mt="xl" mb="xl">
        <Paper shadow="sm" p="lg">
          <h1>{params.slug}</h1>
          <p>
            Product Description Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aspernatur officia reprehenderit porro, architecto
            facilis excepturi iste blanditiis laborum quos sequi magni quisquam
            ipsum dolorum quas nostrum qui debitis distinctio. Similique.
          </p>

          <SimpleGrid
            cols={{ base: 1, xs: 2 }}
            verticalSpacing="xl"
            ml={{ base: "", md: 110 }}
          >
            <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />

            <Grid
              gutter="md"
              mr={{ base: "", md: "xl" }}
              ml={{ base: "", md: "xl" }}
              maw={{ base: "", md: 400 }}
            >
              <GridCol span={{ base: 6, md: 12 }}>
                <Skeleton
                  height={SECONDARY_COL_HEIGHT}
                  radius="md"
                  animate={false}
                />
              </GridCol>
              <GridCol span={{ base: 6, md: 12 }}>
                <Skeleton
                  height={SECONDARY_COL_HEIGHT}
                  radius="md"
                  animate={false}
                />
              </GridCol>
            </Grid>
          </SimpleGrid>

          <section>
            <h2>Product Specification table</h2>
            <ProductSpecsTable />
          </section>
          <GetQuotationModal opened={opened} close={close} title="test"/>
          <Button onClick={open}>Get Quotation</Button>
        </Paper>
      </Container>
    </Layout>
  );
}
