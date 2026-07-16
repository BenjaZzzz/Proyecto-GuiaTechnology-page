"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import ProductCard from "./ProductCard";
import Icon from "./Icon";
import styles from "./TiendaClient.module.css";

const sorts = [
  { key: "relevance", label: "Relevancia" },
  { key: "price-asc", label: "Precio: menor" },
  { key: "price-desc", label: "Precio: mayor" },
];

export default function TiendaClient() {
  const params = useSearchParams();
  const initialCat = params.get("cat") ?? "all";
  const [cat, setCat] = useState(initialCat);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("relevance");

  const filtered = useMemo(() => {
    let list = products.filter((p) => (cat === "all" ? true : p.category === cat));
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q)
      );
    }
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [cat, query, sort]);

  return (
    <section className="section-tight container">
      <div className={styles.toolbar}>
        <div className={styles.search}>
          <Icon name="sparkles" size={18} />
          <input
            type="search"
            placeholder="Busca por marca o modelo…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Buscar productos"
          />
        </div>
        <div className={styles.sort}>
          <label htmlFor="sort" className="text-sm text-soft">
            Ordenar
          </label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            {sorts.map((s) => (
              <option key={s.key} value={s.key}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.chips} role="tablist" aria-label="Categorías">
        <button
          className={`${styles.chip} ${cat === "all" ? styles.chipActive : ""}`}
          onClick={() => setCat("all")}
          role="tab"
          aria-selected={cat === "all"}
        >
          Todas
        </button>
        {categories.map((c) => (
          <button
            key={c.slug}
            className={`${styles.chip} ${cat === c.slug ? styles.chipActive : ""}`}
            onClick={() => setCat(c.slug)}
            role="tab"
            aria-selected={cat === c.slug}
          >
            {c.name}
          </button>
        ))}
      </div>

      <p className={`text-sm text-soft ${styles.count}`}>
        {filtered.length} {filtered.length === 1 ? "equipo" : "equipos"}
      </p>

      {filtered.length > 0 ? (
        <div className="grid cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      ) : (
        <div className={styles.empty}>
          <span className="icon-tile">
            <Icon name="mouse" size={22} />
          </span>
          <h3 className="text-h3">No encontramos equipos con ese filtro</h3>
          <p className="text-soft">
            Prueba con otra categoría o escríbenos y te lo conseguimos.
          </p>
          <button
            className="btn btn-ghost btn-sm"
            onClick={() => {
              setCat("all");
              setQuery("");
            }}
          >
            Limpiar filtros
          </button>
        </div>
      )}
    </section>
  );
}
