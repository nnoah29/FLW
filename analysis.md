# Analyse de FriareLibraryWEB

## But du Site (Purpose)
**FriareLibraryWEB** est une plateforme de bibliothèque numérique et de marketplace dédiée aux documents académiques et éducatifs (mémoires, thèses, rapports, etc.). Le site semble cibler principalement les étudiants, les chercheurs et les institutions académiques.

### Objectifs clés :
1.  **Mutualisation des savoirs** : Permettre aux étudiants (Auteurs) de publier leurs travaux de recherche.
2.  **Accessibilité académique** : Faciliter la recherche de documents spécifiques par domaine, niveau d'étude et institution.
3.  **Monétisation/Gestion** : Proposer un système d'achat de "packs" ou de documents individuels via une infrastructure de paiement intégrée.

---

## Logique de Fonctionnement (Core Logic)

### 1. Architecture Technique
Le projet est une application **Angular 15** structurée de manière modulaire :
-   **Core** : Centralise les services, les modèles de données et l'authentification (JWT via `certDocAccessToken`).
-   **Shared** : Contient les composants réutilisables (Footer, Sidebar, etc.).
-   **Pages** : Regroupe les vues principales (Home, Blog, Search, Publish).
-   **Layouts** : Utilise un système de template (Paper Dashboard) pour assurer une interface d'administration/gestion cohérente.

### 2. Flux de Données et Services
La logique métier est orchestrée par plusieurs services clés :
-   **DocumentService** : Gère la recherche multi-critères, l'affichage des détails, le téléchargement des PDF et le suivi des statistiques (vues/téléchargements).
-   **PaiementsService** : Gère une logique financière complexe incluant la validation par un trésorier, la gestion des soldes bancaires, et l'historique des transactions.
-   **UsersService** : Distingue les rôles (ex: `author`) et gère la création de comptes et les permissions.

### 3. Parcours Utilisateur
-   **Recherche** : L'utilisateur peut filtrer les documents par **Domaine** (ex: Droit, Math), **Niveau** (ex: Licence, Master), **Entité** (Université) et **Année Académique**.
-   **Publication** : Un flux spécifique permet aux auteurs de soumettre un mémoire, déclenchant un processus de validation et de notification par email.
-   **Consommation** : L'accès aux documents peut être lié à des paiements ou des abonnements gérés par le module de paiement.

---

## Conclusion
Le projet est un outil complet de gestion de patrimoine documentaire académique, alliant une interface de consultation publique et un système de gestion (backend/admin) pour les transactions et les validations de publications.
