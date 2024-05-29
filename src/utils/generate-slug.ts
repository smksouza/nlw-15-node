export function generateSlug(title: string): string {
    // Remove acentos e transforma em minúsculas
    const withoutAccents = title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    
    // Substitui espaços e caracteres especiais por hífens
    const slug = withoutAccents.replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    
    return slug;
}